// merge dist/dev and dist/prod to dist/

import { copyFile, mkdir, stat } from 'fs/promises'
import { join, relative, dirname } from 'path'
import { glob } from 'glob'

async function merge() {
  // 创建最终的 dist 目录
  await mkdir('dist', { recursive: true })

  // 复制开发版本文件
  const devFiles = await glob('dist/dev/**/*')
  for (const file of devFiles) {
    const stats = await stat(file)
    if (stats.isFile()) {
      const relativePath = relative('dist/dev', file)
      const targetPath = join('dist', relativePath)
      // 确保目标目录存在
      await mkdir(dirname(targetPath), { recursive: true })
      // console.log('Copying dev file:', file, 'to', targetPath)
      await copyFile(file, targetPath)
    }
  }

  // 复制生产版本文件
  const prodFiles = await glob('dist/prod/**/*')
  for (const file of prodFiles) {
    const stats = await stat(file)
    if (stats.isFile()) {
      const relativePath = relative('dist/prod', file)
      const targetPath = join('dist', relativePath)
      // 确保目标目录存在
      await mkdir(dirname(targetPath), { recursive: true })
      // console.log('Copying prod file:', file, 'to', targetPath)
      await copyFile(file, targetPath)
    }
  }
}

merge().catch(console.error) 