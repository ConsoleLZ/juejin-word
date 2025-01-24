<template>
  <a-card title="掘金今日排行榜词云图">
    <a-spin :spinning="loading">
      <div ref="chart" style="height: 400px; width: 100%"></div>
      <a-divider />
      <h3>热门词汇</h3>
      <a-list :data-source="topWords">
        <template #renderItem="{ item }">
          <a-list-item>
            <span style="margin-right: 8px">{{ item.name }}</span>
            <a-tag color="blue">{{ item.value }}次</a-tag>
          </a-list-item>
        </template>
      </a-list>
    </a-spin>
  </a-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import axios from 'axios'
import load from 'jieba-wasm'
import { cut } from 'jieba-wasm'

const chart = ref<HTMLElement | null>(null)
const newsData = ref<string[]>([])
const loading = ref(true)
const topWords = ref<{name: string, value: number}[]>([])

// 获取新闻数据
const fetchNews = async () => {
  try {
    const res = await axios.get('https://sbmy.fun/api/hotSearch/queryByType?type=juejin')
    
    newsData.value = res.data.data.hotSearchDTOList.map((item: any) => item.hotSearchTitle)
    renderChart()
  } catch (error) {
    console.error('获取新闻失败:', error)
  }
}

// 生成词云
const renderChart = () => {
  if (!chart.value) return

  const myChart = echarts.init(chart.value)
  const option = {
    series: [{
      type: 'wordCloud',
      shape: 'circle',
      sizeRange: [12, 60],
      rotationRange: [-90, 90],
      rotationStep: 45,
      gridSize: 8,
      drawOutOfBound: false,
      textStyle: {
        color: () => {
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')'
        }
      },
      data: generateWordData()
    }]
  }
  myChart.setOption(option)
}

// 生成词云数据
const generateWordData = () => {
  const wordMap = new Map<string, number>()
  newsData.value.forEach(text => {
    const words = cut(text, true)
    words.forEach(word => {
      if (word.length > 1) { // 过滤单字
        if (wordMap.has(word)) {
          wordMap.set(word, wordMap.get(word)! + 1)
        } else {
          wordMap.set(word, 1)
        }
      }
    })
  })
  
  const wordData = Array.from(wordMap).map(([name, value]) => ({ name, value }))
  // 获取出现次数最多的前5个词汇
  topWords.value = wordData
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
    
  return wordData
}

onMounted(async () => {
  try {
    await load()
    await fetchNews()
  } catch (error) {
    console.error('初始化失败:', error)
  } finally {
    loading.value = false
  }
})
</script>
