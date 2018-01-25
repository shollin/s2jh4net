## 项目简介

集结最新主流时尚开源技术的面向互联网Web应用的整合前端门户站点、HTMl5移动站点及后端管理系统一体的的基础开发框架，提供一个J2EE相关主流开源技术架构整合及一些企业应用基础通用功能和组件的设计实现的最佳实践和原型参考。

### 项目托管同步更新站点列表：

**https://github.com/xautlx/s2jh4net**

**https://gitee.com/xautlx/s2jh4net**

**最近版本更新说明**

2.1.0 / 2018-01-24
==================
  * 启用全新项目标识：EntDIY， https://www.entdiy.com
  * 整体重构项目Maven结构，模块化拆分，使定制开发能按需所取
  * 全面使用Date/Time API、lambda等特性，因此要求JDK8+
  * 核心组件版本升级到最新：SpringMVC/Spring 5.0.X, Hibernate 5.2.X, Spring Data 2.0.X, 及其他关联组件版本
  * UI基础框架版本从 Metronic 1.4.5 升级到 4.7.5
  * 基于Bootstrap Plugin模式全面重构所有UI扩展组件 

> **提示**：为了方便用户区分链接资源是外部和内部，文档特别以![link](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/images/link.gif)标识：链接前面有此图标说明是外部链接，如果你已经熟悉相关概念可以忽略点击；没有此标识说明是文档内部链接，建议点击访问以完整查阅项目文档。

## 框架特色

* 面向主流企业级WEB应用系统的界面和常用基础功能设计实现
* 主体基于主流的（Java 8 + SpringMVC/Spring 5 + Hibernate 5.2/MyBatis 3/JPA 2.1/Spring Data 2）架构，详见[技术列表清单](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/技术列表.md)
* 基于流行JQuery 1.12/Bootstrap 3.3等UI框架和插件扩展，良好的浏览器兼容性和移动设备访问支持
* 提供一个基础的代码生成框架，简化实现快速基本的CRUD功能开发
* 基于Maven的模块化项目和组件依赖管理模式，便捷高效的与持续集成开发集成

## 技术架构

* [技术列表](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/技术列表.md) - 框架主要技术(Java/Web/Tool)组件列表介绍
* [技术特性](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/技术特性.md) - 主要技术选型和设计说明
* [异常处理](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/异常处理.md) - 介绍框架的异常处理的策略设计
* [移动支持](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/移动支持.md) - 以Android为例的Web App与Native App整合应用

## 开发指南

* [演示运行](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/演示运行.md) - 一键运行脚本全自动完成基于Maven构建并Docker部署运行应用
* [开发配置](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/开发配置.md) - 开发基础环境配置说明
* [工程结构](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/工程结构.md) - 对整个项目工程代码结构进行概要性介绍
* [代码生成](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/代码生成.md) - 用于基本CURD框架代码生成的工具
* [基础功能](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/基础功能.md) - 框架已经实现的基础功能介绍说明
* [UI组件](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/UI组件.md)    - 框架UI组件设计思路和用法演示
* [表格组件](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/表格组件.md) - 功能强大的Grid表格组件扩展增强
* [表单控制](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/表单控制.md) - 介绍Web开发过程最主要的表单处理设计
* [常见问题](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/FAQ.md) - 对框架相关常见问题FAQ说明


> 由于项目采用了Lombok等插件，如果你想把git获取工程代码导入开发环境，请一定提前浏览文档 [开发配置](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/开发配置.md) 为IDE进行Lombok等插件配置，否则会出一大堆编译错误。

## 核心模块

* [基础数据](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/基础数据.md) - 介绍框架对于基础数据及开发测试数据的设计思路
* [数据审计](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/数据审计.md) - 基于Hibernate Envers组件实现业务数据变更审计记录
* [计划任务](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/计划任务.md) - 基于Quartz组件实现计划任务的配置监控管理

> 为了便于开发过程参考，项目直接把开发相关的参考样例和指南文档嵌入到运行部署应用中，具体内容可在线浏览，如下图Snapshot部分截图示意。

## 在线演示

**https://demo.entdiy.com/entdiy**

前端门户和HTML5移动站点目前内容较少，主要演示集中在管理端。账号：root，密码：123456，或直接点击右下方的“超级管理员”登录链接即可。

在线演示站点为Ngrok穿透访问家用台式机，可能存在访问缓慢情况或更新时中断。同时为了防止随意数据变更导致系统崩溃，对个别功能启用了演示禁用控制。

建议可参考 [开发配置](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/开发配置.md) 在本地运行完整体验。

> 项目最新自动化持续集成构建状态 Travis-CI Status: [![Build Status](https://travis-ci.org/xautlx/s2jh4net.svg?branch=master)](https://travis-ci.org/xautlx/s2jh4net)

## 截图展示

![ui-example](entdiy-devops/entdiy-dev-guide/src/main/resources/META-INF/resources/dev/docs/markdown/images/ui-example.jpg?_=20180125)

### 许可说明

* 免费许可

本项目代码除src/main/webapp/assets/apps/scripts目录下相关Javascript组件代码以混淆方式提供外，其余开源，在保留标识本项目来源信息以及保证不对本项目进行非授权的销售行为的前提下，可以以任意方式自由免费使用：开源、非开源、商业及非商业。

若对项目有任何技术问题或Issue反馈，可加QQ群讨论组：303438676 或提交到Git平台的Issue：

https://github.com/xautlx/s2jh4net/issues , https://gitee.com/xautlx/s2jh4net/issues

* 收费服务

如果你还有兴趣在现有开放资源基础上进一步获取完整源码/提供定制的扩展实现/技术咨询服务/毕业设计指导/二次开发项目指导等方面的合作意向，可联系 E-Mail: s2jh-dev@hotmail.com 或 QQ: 2414521719 (加Q请注明：s2jh4net) 洽谈。[上述个人联系方式为收费服务渠道，恕不提供免费咨询]

### 参考引用

欢迎关注作者其他项目：

* [Nutch 2.X AJAX Plugins (Active)](https://github.com/xautlx/nutch-ajax) -  基于Apache Nutch 2.3和Htmlunit, Selenium WebDriver等组件扩展，实现对于AJAX加载类型页面的完整页面内容抓取，以及特定数据项的解析和索引

* [S2JH4Net (Active)](https://github.com/xautlx/s2jh4net) -  基于Spring MVC+Spring+JPA+Hibernate的面向互联网及企业Web应用开发框架

* [S2JH (Deprecated)](https://github.com/xautlx/s2jh) -  基于Struts2+Spring+JPA+Hibernate的面向企业Web应用开发框架
 
* [Nutch 1.X AJAX Plugins (Deprecated)](https://github.com/xautlx/nutch-htmlunit) -  基于Apache Nutch 1.X和Htmlunit的扩展实现AJAX页面爬虫抓取解析插件
 
* [12306 Hunter (Deprecated)](https://github.com/xautlx/12306-hunter) - （功能已失效不可用，不过还可以当作Swing开发样列参考只用）Java Swing C/S版本12306订票助手，用处你懂的

