import pLimit from 'p-limit'

const limit = pLimit(3)

const fetchs = [
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
  limit(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    return await response.json()
  }),
];

(async () => {
  const result = await Promise.all(fetchs)
  result.forEach(({ answer }) => {
    console.log(answer)
  })
})()