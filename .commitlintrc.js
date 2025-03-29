module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 信息以空格开头
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    // 信息最大长度
    "header-max-length": [2, "always", 108],
    // 信息不能未空
    "subject-empty": [2, "never"],
    // 信息类型不能未空
    "type-empty": [2, "never"],
    // 提交信息的类型 下文有介绍
    "type-enum": [
      2,
      "always",
      [
        "feat", //增加一个新特性
        "fix", //修复一个 bug
        "perf", //更改代码以提高性能
        "style", //不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        "docs", //仅仅修改文档说明
        "test", //增加新的测试功能或更改原有的测试模块
        "refactor", //代码重构时使用
        "build", //更改构建系统和外部依赖项（如将 gulp 改为 webpack，更新某个 npm 包）
        "ci", //对 CI 配置文件和脚本的更改
        "chore", //复杂事务变动
        "revert", //
        "wip", //正在进行
        "workflow", //
        "types", //
        "release", //
        "temp", //临时提交
      ],
    ],
  },
};
