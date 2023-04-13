import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择：Nuxt 是一个基于 Vue 的上层全栈通用框架，它提供了大量优秀特性提升开发效率和体验，因此是 Vue 栈上层框架的最佳选择之一。',
      content: `开箱即用的开发环境
      开发者对一款现代框架的一个重要要求就是开箱即用。在这方面 Nuxt 提供了如下能力：
      
      整合 Vue3 作为视图引擎；
      整合 Webpack5 和 Vite 作为打包工具；
      提供最新 ES 语法，零配置 TS 支持；
      内置 vue-router，基于文件的路由；
      内置 SSR 友好的全局状态管理模块；
      内置数据访问模块 useFetch 等等。
      良好的开发体验
      良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：
      
      基于文件的路由支持；
      组件、依赖库、工具集的自动导入；
      内置的数据获取模块和新的编程范式；
      零配置的 TS 支持；
      插件、模块、中间件等多种复用机制。
      服务端能力
      Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。
      
      不同场景解决方案
      为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：
      
      服务端渲染 SSR；
      客户端渲染 SPA；
      全静态内容生成 SSG；
      混合渲染模式 Hybrid；
      边缘渲染 Edge-render。
      在后面章节中，我们也将给大家详细介绍这几种模式的异同和选择。`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择：Nuxt 是一个基于 Vue 的上层全栈通用框架，它提供了大量优秀特性提升开发效率和体验，因此是 Vue 栈上层框架的最佳选择之一。',
      content: `开箱即用的开发环境
      开发者对一款现代框架的一个重要要求就是开箱即用。在这方面 Nuxt 提供了如下能力：
      
      整合 Vue3 作为视图引擎；
      整合 Webpack5 和 Vite 作为打包工具；
      提供最新 ES 语法，零配置 TS 支持；
      内置 vue-router，基于文件的路由；
      内置 SSR 友好的全局状态管理模块；
      内置数据访问模块 useFetch 等等。
      良好的开发体验
      良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：
      
      基于文件的路由支持；
      组件、依赖库、工具集的自动导入；
      内置的数据获取模块和新的编程范式；
      零配置的 TS 支持；
      插件、模块、中间件等多种复用机制。
      服务端能力
      Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。
      
      不同场景解决方案
      为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：
      
      服务端渲染 SSR；
      客户端渲染 SPA；
      全静态内容生成 SSG；
      混合渲染模式 Hybrid；
      边缘渲染 Edge-render。
      在后面章节中，我们也将给大家详细介绍这几种模式的异同和选择。`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择：Nuxt 是一个基于 Vue 的上层全栈通用框架，它提供了大量优秀特性提升开发效率和体验，因此是 Vue 栈上层框架的最佳选择之一。',
      content: `开箱即用的开发环境
      开发者对一款现代框架的一个重要要求就是开箱即用。在这方面 Nuxt 提供了如下能力：
      
      整合 Vue3 作为视图引擎；
      整合 Webpack5 和 Vite 作为打包工具；
      提供最新 ES 语法，零配置 TS 支持；
      内置 vue-router，基于文件的路由；
      内置 SSR 友好的全局状态管理模块；
      内置数据访问模块 useFetch 等等。
      良好的开发体验
      良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：
      
      基于文件的路由支持；
      组件、依赖库、工具集的自动导入；
      内置的数据获取模块和新的编程范式；
      零配置的 TS 支持；
      插件、模块、中间件等多种复用机制。
      服务端能力
      Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。
      
      不同场景解决方案
      为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：
      
      服务端渲染 SSR；
      客户端渲染 SPA；
      全静态内容生成 SSG；
      混合渲染模式 Hybrid；
      边缘渲染 Edge-render。
      在后面章节中，我们也将给大家详细介绍这几种模式的异同和选择。`,
    },
  })
  await prisma.column.create({
    data: {
      title: '上层框架最佳选择: Nuxt',
      cover: 'column-nuxt.png',
      desc: '上层框架最佳选择：Nuxt 是一个基于 Vue 的上层全栈通用框架，它提供了大量优秀特性提升开发效率和体验，因此是 Vue 栈上层框架的最佳选择之一。',
      content: `开箱即用的开发环境
      开发者对一款现代框架的一个重要要求就是开箱即用。在这方面 Nuxt 提供了如下能力：
      
      整合 Vue3 作为视图引擎；
      整合 Webpack5 和 Vite 作为打包工具；
      提供最新 ES 语法，零配置 TS 支持；
      内置 vue-router，基于文件的路由；
      内置 SSR 友好的全局状态管理模块；
      内置数据访问模块 useFetch 等等。
      良好的开发体验
      良好的开发体验主要来源于效率工具和避免重复劳动，这方面我们看一下 Nuxt 提供的能力：
      
      基于文件的路由支持；
      组件、依赖库、工具集的自动导入；
      内置的数据获取模块和新的编程范式；
      零配置的 TS 支持；
      插件、模块、中间件等多种复用机制。
      服务端能力
      Nuxt 内置了 Nitro 服务端引擎，能够同时提供 SSR 和 API 路由支持，这也就是说，除了能够提供服务端渲染能力，我们还能编写服务端接口，这使我们拥有了全栈开发能力。另外 API 兼容 node、connect、express，未来也可以把应用发布到 Node.js、Serverless 等服务器运行环境。
      
      不同场景解决方案
      为了满足开发者多种场景开发需求，Nuxt 提供了 5 种渲染模式：
      
      服务端渲染 SSR；
      客户端渲染 SPA；
      全静态内容生成 SSG；
      混合渲染模式 Hybrid；
      边缘渲染 Edge-render。
      在后面章节中，我们也将给大家详细介绍这几种模式的异同和选择。`,
    },
  })

  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解 Nuxt3 核心知识，然后在后端开发方面做一个知识扩展，最后带大家完成一个完整的实战项目。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：
      模块一，将从渲染模式等基础概念出发，先扭转一些同学的固有思维，补充缺失知识；
      模块二，结合个人博客案例，深入学习 Nuxt3 核心特性；
      模块三，解决项目工程化问题，从扩展性、复用性等角度深入了解模块等框架进阶知识；
      模块四，将为项目实战做准备，给大家讲解全栈知识，包括数据库设计、接口设计和开发，大家会接触并掌握 Apifox、Prisma 等前端比较时髦的新工具；
      模块五，项目实战，我会带大家开发一个知识分享社区主题的全栈项目，包括了从接口开发，到前端开发，再到优化、部署和持续集成的全流程实战。
      相信学习完本小册，会让你深入掌握 Nuxt3 的同时，还能全方位提升自己的知识深度和架构水平。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })

  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解 Nuxt3 核心知识，然后在后端开发方面做一个知识扩展，最后带大家完成一个完整的实战项目。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：
      模块一，将从渲染模式等基础概念出发，先扭转一些同学的固有思维，补充缺失知识；
      模块二，结合个人博客案例，深入学习 Nuxt3 核心特性；
      模块三，解决项目工程化问题，从扩展性、复用性等角度深入了解模块等框架进阶知识；
      模块四，将为项目实战做准备，给大家讲解全栈知识，包括数据库设计、接口设计和开发，大家会接触并掌握 Apifox、Prisma 等前端比较时髦的新工具；
      模块五，项目实战，我会带大家开发一个知识分享社区主题的全栈项目，包括了从接口开发，到前端开发，再到优化、部署和持续集成的全流程实战。
      相信学习完本小册，会让你深入掌握 Nuxt3 的同时，还能全方位提升自己的知识深度和架构水平。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解 Nuxt3 核心知识，然后在后端开发方面做一个知识扩展，最后带大家完成一个完整的实战项目。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：
      模块一，将从渲染模式等基础概念出发，先扭转一些同学的固有思维，补充缺失知识；
      模块二，结合个人博客案例，深入学习 Nuxt3 核心特性；
      模块三，解决项目工程化问题，从扩展性、复用性等角度深入了解模块等框架进阶知识；
      模块四，将为项目实战做准备，给大家讲解全栈知识，包括数据库设计、接口设计和开发，大家会接触并掌握 Apifox、Prisma 等前端比较时髦的新工具；
      模块五，项目实战，我会带大家开发一个知识分享社区主题的全栈项目，包括了从接口开发，到前端开发，再到优化、部署和持续集成的全流程实战。
      相信学习完本小册，会让你深入掌握 Nuxt3 的同时，还能全方位提升自己的知识深度和架构水平。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
  await prisma.course.create({
    data: {
      title: 'Nuxt全栈开发',
      cover: 'course-nuxt.png',
      desc: '这门课我会全面讲解 Nuxt3 核心知识，然后在后端开发方面做一个知识扩展，最后带大家完成一个完整的实战项目。',
      oPrice: 129,
      price: 99,
      detail: `这门课程共分五个模块：
      模块一，将从渲染模式等基础概念出发，先扭转一些同学的固有思维，补充缺失知识；
      模块二，结合个人博客案例，深入学习 Nuxt3 核心特性；
      模块三，解决项目工程化问题，从扩展性、复用性等角度深入了解模块等框架进阶知识；
      模块四，将为项目实战做准备，给大家讲解全栈知识，包括数据库设计、接口设计和开发，大家会接触并掌握 Apifox、Prisma 等前端比较时髦的新工具；
      模块五，项目实战，我会带大家开发一个知识分享社区主题的全栈项目，包括了从接口开发，到前端开发，再到优化、部署和持续集成的全流程实战。
      相信学习完本小册，会让你深入掌握 Nuxt3 的同时，还能全方位提升自己的知识深度和架构水平。`,
      Catalogue: {
        createMany: {
          data: [
            { title: '01开篇：课程介绍和安排', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '02上层框架最佳选择', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '03五种渲染模式', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '04快速创建首个nuxt项目', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '05文件路由和布局', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '06使用静态资源', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '07自动导入特性', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '08API路由', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '09数据获取', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '10状态管理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '11错误处理', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
            { title: '12常用配置和优化', source: 'https://juejin.cn/video/7202149403342143520/section/7202885295820242947' },
          ],
        },
      },
    },
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
