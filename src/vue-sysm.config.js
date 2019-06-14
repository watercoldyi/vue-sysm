export default {
    title: '系统管理后台',
    menu: [
        { content: "点好", busCmd: "kick" },
    ],
    nav: [
        {
            icon: 'el-icon-lx-home',
            index: 'dashboard',
            title: '系统首页'
        },
    ],
    ignoreUri: ["/login"]
}