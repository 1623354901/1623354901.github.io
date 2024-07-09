(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1164:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在-react-项目中使用-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-react-项目中使用-ts"}},[s._v("#")]),s._v(" 在 React 项目中使用 TS")]),s._v(" "),t("ol",[t("li",[s._v("创建新项目")]),s._v(" "),t("li",[s._v("在现有项目中添加 TS")])]),s._v(" "),t("h2",{attrs:{id:"创建新项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建新项目"}},[s._v("#")]),s._v(" 创建新项目")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令："),t("code",[s._v("npx create-react-app my-app --template typescript")])])]),s._v(" "),t("li",[t("p",[s._v("说明：在命令行中，添加 "),t("code",[s._v("--template typescript")]),s._v(" 表示创建支持 TS 的项目")])]),s._v(" "),t("li",[t("p",[s._v("项目目录的变化：")]),s._v(" "),t("ol",[t("li",[s._v("在项目根目录中多了一个文件："),t("code",[s._v("tsconfig.json")]),s._v(" "),t("ul",[t("li",[s._v("TS 的配置文件")])])]),s._v(" "),t("li",[s._v("在 src 目录中，文件的后缀有变化，由原来的 .js 变为 "),t("code",[s._v(".ts")]),s._v(" 或 "),t("code",[s._v(".tsx")]),s._v(" "),t("ul",[t("li",[t("code",[s._v(".ts")]),s._v(" ts 文件的后缀名")]),s._v(" "),t("li",[t("code",[s._v(".tsx")]),s._v(" 是在 TS 中使用 React 组件时，需要使用该后缀")])])]),s._v(" "),t("li",[s._v("在 src 目录中，多了 "),t("code",[s._v("react-app-env.d.ts")]),s._v(" 文件\n"),t("ul",[t("li",[t("code",[s._v(".d.ts")]),s._v(" 类型声明文件，用来指定类型")])])])])])]),s._v(" "),t("h2",{attrs:{id:"tsconfig的介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig的介绍"}},[s._v("#")]),s._v(" tsconfig的介绍")]),s._v(" "),t("ul",[t("li",[s._v("tsconfig.json是typescript项目的配置文件，用于配置typescript")]),s._v(" "),t("li",[s._v("tsconfig.json配置文件可以通过 "),t("code",[s._v("tsc --init")]),s._v(" 生成")])]),s._v(" "),t("ul",[t("li",[s._v("说明：所有的配置项都可以通过鼠标移入的方式，来查看配置项的解释说明。")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("tsconfig 文档链接"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译选项")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成代码的语言版本：将我们写的 TS 代码编译成哪个版本的 JS 代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 命令行： tsc --target es5 11-测试TS配置文件.ts")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es5"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定要包含在编译中的 library")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lib"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dom"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dom.iterable"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"esnext"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许 ts 编译器编译 js 文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowJs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 跳过类型声明文件的类型检查")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"skipLibCheck"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// es 模块 互操作，屏蔽 ESModule 和 CommonJS 之间的差异")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"esModuleInterop"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许通过 import x from 'y' 即使模块没有显式指定 default 导出")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowSyntheticDefaultImports"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启严格模式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strict"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对文件名称强制区分大小写")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"forceConsistentCasingInFileNames"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为 switch 语句启用错误报告")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noFallthroughCasesInSwitch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成代码的模块化标准")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"esnext"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模块解析（查找）策略")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"moduleResolution"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许导入扩展名为.json的模块")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"resolveJsonModule"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否将没有 import/export 的文件视为旧（全局而非模块化）脚本文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"isolatedModules"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译时不生成任何文件（只进行类型检查）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noEmit"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定将 JSX 编译成什么形式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jsx"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-jsx"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定允许 ts 处理的目录")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("h1",{attrs:{id:"typescript声明文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript声明文件"}},[s._v("#")]),s._v(" typescript声明文件")]),s._v(" "),t("p",[s._v("今天几乎所有的 JavaScript 应用都会引入许多第三方库来完成任务需求。")]),s._v(" "),t("p",[s._v("这些第三方库不管是否是用 TS 编写的，最终都要编译成 JS 代码，才能发布给开发者使用。")]),s._v(" "),t("p",[s._v("我们知道是 TS 提供了类型，才有了代码提示和类型保护等机制。")]),s._v(" "),t("p",[s._v("但在项目开发中使用第三方库时，你会发现它们几乎都有相应的 TS 类型，这些类型是怎么来的呢? "),t("code",[s._v("类型声明文件")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("类型声明文件：用来为已存在的 JS 库提供类型信息")])])]),s._v(" "),t("p",[s._v("这样在 TS 项目中使用这些库时，就像用 TS 一样，都会有代码提示、类型保护等机制了。")]),s._v(" "),t("ol",[t("li",[s._v("TS 的两种文件类型")]),s._v(" "),t("li",[s._v("类型声明文件的使用说明")])]),s._v(" "),t("h2",{attrs:{id:"ts-中的两种文件类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-中的两种文件类型"}},[s._v("#")]),s._v(" TS 中的两种文件类型")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("TS 中有两种文件类型：1 "),t("code",[s._v(".ts")]),s._v(" 文件 2 "),t("code",[s._v(".d.ts")]),s._v(" 文件")])]),s._v(" "),t("li",[t("p",[s._v(".ts 文件:")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("既包含类型信息又可执行代码")])]),s._v(" "),t("li",[s._v("可以被编译为 .js 文件，然后，执行代码")]),s._v(" "),t("li",[s._v("用途：编写程序代码的地方")])])]),s._v(" "),t("li",[t("p",[s._v(".d.ts 文件:")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("只包含类型信息")]),s._v("的类型声明文件")]),s._v(" "),t("li",[t("strong",[s._v("不会生成 .js 文件，仅用于提供类型信息,在.d.ts文件中不允许出现可执行的代码，只用于提供类型")])]),s._v(" "),t("li",[s._v("用途：为 JS 提供类型信息")])])]),s._v(" "),t("li",[t("p",[s._v("总结：.ts 是 "),t("code",[s._v("implementation")]),s._v("(代码实现文件)；"),t("strong",[s._v(".d.ts 是 declaration(类型声明文件)")])])]),s._v(" "),t("li",[t("p",[s._v("如果要为 JS 库提供类型信息，要使用 "),t("code",[s._v(".d.ts")]),s._v(" 文件")])])]),s._v(" "),t("h2",{attrs:{id:"类型声明文件的使用说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型声明文件的使用说明"}},[s._v("#")]),s._v(" 类型声明文件的使用说明")]),s._v(" "),t("ul",[t("li",[s._v("在使用 TS 开发项目时，类型声明文件的使用包括以下两种方式:\n"),t("ol",[t("li",[s._v("使用已有的类型声明文件")]),s._v(" "),t("li",[s._v("创建自己的类型声明文件")])])])]),s._v(" "),t("p",[s._v("使用已有的类型声明文件")]),s._v(" "),t("ol",[t("li",[s._v("内置类型声明文件")]),s._v(" "),t("li",[s._v("第三方库的类型声明文件")]),s._v(" "),t("li",[s._v("自己提供的")])]),s._v(" "),t("h2",{attrs:{id:"内置类型声明文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置类型声明文件"}},[s._v("#")]),s._v(" 内置类型声明文件")]),s._v(" "),t("ul",[t("li",[s._v("TS 为 JS 运行时可用的所有标准化内置 API 都提供了声明文件")]),s._v(" "),t("li",[s._v("比如，在使用数组时，数组所有方法都会有相应的代码提示以及类型信息:")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" strs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 鼠标放在 forEach 上查看类型")]),s._v("\nstrs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("forEach\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("实际上这都是 TS 提供的内置类型声明文件")]),s._v(" "),t("li",[s._v("可以通过 Ctrl + 鼠标左键(Mac：Command + 鼠标左键)来查看内置类型声明文件内容")]),s._v(" "),t("li",[s._v("比如，查看 forEach 方法的类型声明，在 VSCode 中会自动跳转到 "),t("code",[s._v("lib.es5.d.ts")]),s._v(" 类型声明文件中")]),s._v(" "),t("li",[s._v("当然，像 window、document 等 BOM、DOM API 也都有相应的类型声明("),t("code",[s._v("lib.dom.d.ts")]),s._v(")")])]),s._v(" "),t("h2",{attrs:{id:"第三方库的类型声明文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方库的类型声明文件"}},[s._v("#")]),s._v(" 第三方库的类型声明文件")]),s._v(" "),t("ul",[t("li",[s._v("目前，几乎所有常用的第三方库都有相应的类型声明文件")]),s._v(" "),t("li",[s._v("第三方库的类型声明文件有两种存在形式:1 库自带类型声明文件 2 由 DefinitelyTyped 提供。")])]),s._v(" "),t("ol",[t("li",[s._v("库自带类型声明文件：比如，axios")])]),s._v(" "),t("ul",[t("li",[s._v("查看 "),t("code",[s._v("node_modules/axios")]),s._v(" 目录")])]),s._v(" "),t("p",[s._v("解释：这种情况下，正常导入该库，"),t("strong",[s._v("TS 就会自动加载库自己的类型声明文件")]),s._v("，以提供该库的类型声明。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("由 DefinitelyTyped 提供")])]),s._v(" "),t("ul",[t("li",[s._v("DefinitelyTyped 是一个 github 仓库，用来提供高质量 TypeScript 类型声明")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DefinitelyTyped 链接"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("可以通过 npm/yarn 来下载该仓库提供的 TS 类型声明包，这些包的名称格式为:"),t("code",[s._v("@types/*")])]),s._v(" "),t("li",[s._v("比如，@types/react、@types/lodash 等")]),s._v(" "),t("li",[s._v("说明：在实际项目开发时，如果你使用的第三方库没有自带的声明文件，VSCode 会给出明确的提示")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" _ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lodash'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 VSCode 中，查看 'lodash' 前面的提示")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("解释：当安装 "),t("code",[s._v("@types/*")]),s._v(" 类型声明包后，"),t("strong",[s._v("TS 也会自动加载该类声明包")]),s._v("，以提供该库的类型声明")]),s._v(" "),t("li",[s._v("补充：TS 官方文档提供了一个页面，可以来查询 @types/* 库")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.typescriptlang.org/dt",target:"_blank",rel:"noopener noreferrer"}},[s._v("@types/* 库"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"创建自己的类型声明文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建自己的类型声明文件"}},[s._v("#")]),s._v(" 创建自己的类型声明文件")]),s._v(" "),t("ol",[t("li",[s._v("项目内共享类型")]),s._v(" "),t("li",[s._v("为已有 JS 文件提供类型声明")])]),s._v(" "),t("h3",{attrs:{id:"项目内共享类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目内共享类型"}},[s._v("#")]),s._v(" 项目内共享类型")]),s._v(" "),t("ul",[t("li",[s._v("如果多个 .ts 文件中都用到同一个类型，此时可以创建 .d.ts 文件提供该类型，实现类型共享。")]),s._v(" "),t("li",[s._v("操作步骤:\n"),t("ol",[t("li",[s._v("创建 index.d.ts 类型声明文件。")]),s._v(" "),t("li",[s._v("创建需要共享的类型，并使用 export 导出(TS 中的类型也可以使用 import/export 实现模块化功能)。")]),s._v(" "),t("li",[s._v("在需要使用共享类型的 .ts 文件中，通过 import 导入即可(.d.ts 后缀导入时，直接省略)。")])])])]),s._v(" "),t("h3",{attrs:{id:"为已有-js-文件提供类型声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为已有-js-文件提供类型声明"}},[s._v("#")]),s._v(" 为已有 JS 文件提供类型声明")]),s._v(" "),t("ol",[t("li",[s._v("在将 JS 项目迁移到 TS 项目时，为了让已有的 .js 文件有类型声明。")]),s._v(" "),t("li",[s._v("成为库作者，创建库给其他人使用。")])]),s._v(" "),t("ul",[t("li",[s._v("注意:类型声明文件的编写与模块化方式相关，不同的模块化方式有不同的写法。但由于历史原因，JS 模块化的发展 经历过多种变化(AMD、CommonJS、UMD、ESModule 等)，而 TS 支持各种模块化形式的类型声明。这就导致 ，类型声明文件相关内容又多又杂。")]),s._v(" "),t("li",[s._v("演示:基于最新的 ESModule(import/export)来为已有 .js 文件，创建类型声明文件。")])]),s._v(" "),t("h3",{attrs:{id:"类型声明文件的使用说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型声明文件的使用说明-2"}},[s._v("#")]),s._v(" 类型声明文件的使用说明")]),s._v(" "),t("ul",[t("li",[s._v("说明:TS 项目中也可以使用 .js 文件。")]),s._v(" "),t("li",[s._v("说明:在导入 .js 文件时，TS 会自动加载与 .js 同名的 .d.ts 文件，以提供类型声明。")]),s._v(" "),t("li",[s._v("declare 关键字:用于类型声明，为其他地方(比如，.js 文件)已存在的变量声明类型，而不是创建一个新的变量。\n"),t("ol",[t("li",[s._v("对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。")]),s._v(" "),t("li",[s._v("对于 let、function 等具有双重含义(在 JS、TS 中都能用)，应该使用 declare 关键字，明确指定此处用于类型声明。")])])])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" songName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'痴心绝对'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" position "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("changeDirection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("direction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fomartPoint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("point")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'当前坐标：'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" point"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" songName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" changeDirection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fomartPoint "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("定义类型声明文件")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[s._v("declare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("number\n\ndeclare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("songName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Position")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ndeclare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("position")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Position\n\ndeclare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("x")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("y")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number\n\ntype Direction "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'left'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'right'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'top'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bottom'")]),s._v("\n\ndeclare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("changeDirection")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("direction")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v("\n\ntype "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("FomartPoint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("point")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v("\n\ndeclare "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("fomartPoint")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" FomartPoint\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" songName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" position"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" changeDirection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" FomartPoint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fomartPoint\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h1",{attrs:{id:"在现有项目中添加-ts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在现有项目中添加-ts"}},[s._v("#")]),s._v(" 在现有项目中添加 TS")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://create-react-app.dev/docs/adding-typescript",target:"_blank",rel:"noopener noreferrer"}},[s._v("CRA 添加 ts 文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("如果要在现有的 JS 项目中，添加 TS，需要以下操作：")])]),s._v(" "),t("ol",[t("li",[s._v("安装包："),t("code",[s._v("yarn add typescript @types/node @types/react @types/react-dom @types/jest")])]),s._v(" "),t("li",[s._v("把 "),t("code",[s._v("jsconfig.json")]),s._v("改成 path.tsconfig.json")]),s._v(" "),t("li",[s._v("将原来通过 React 脚手架创建的 TS 项目中的 tsconfig.json 中的配置，拷贝到咱们自己的项目中")]),s._v(" "),t("li",[s._v("创建 "),t("code",[s._v("path.tsconfig.json")]),s._v(" 文件，将原来 "),t("code",[s._v("jsconfig.json")]),s._v(" 文件中的内容拿过来")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"baseUrl"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"paths"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@scss/*"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/assets/styles/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("在 "),t("code",[s._v("tsconfig.json")]),s._v(" 中，添加以下配置：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加这一句")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./path.tsconfig.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ...\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("将通过 React 脚手架创建的 TS 项目中的 "),t("code",[s._v("src/react-app-env.d.ts")]),s._v(" 拷贝到咱们自己项目的 src 目录下")]),s._v(" "),t("li",[s._v("重启项目")])]),s._v(" "),t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),t("ol",[t("li",[s._v("项目中使用 TS 时，既可以包含 js 文件，又可以包含 ts 文件")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v(".js")]),s._v("、"),t("code",[s._v(".jsx")]),s._v("（使用 JS 时，React 组件对应的文件后缀）")]),s._v(" "),t("li",[t("code",[s._v(".ts")]),s._v("、"),t("code",[s._v(".tsx")]),s._v("（使用 TS 时，React 组件对应的文件后缀）、"),t("code",[s._v(".d.ts")])])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("在已有项目中，添加 TS 时的推荐模式")])]),s._v(" "),t("ul",[t("li",[s._v("新的功能用 TS")]),s._v(" "),t("li",[s._v("已实现的功能，可以继续保持 JS 文件，慢慢修改为 TS 即可")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("React 组件对应的文件后缀，修改为："),t("code",[s._v(".tsx")])]),s._v(" "),t("li",[s._v("工具函数对应的文件后缀，修改为："),t("code",[s._v(".ts")]),s._v(" 或者为其添加类型声明文件 "),t("code",[s._v(".d.ts")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);