const posts = [
    {
        imagePath: "01-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "02-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "03-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "04-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "05-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "06-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "07-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "08-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "09-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "10-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "11-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "12-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "13-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "14-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "15-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "16-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "17-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "18-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "19-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "20-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "21-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "22-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "23-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "24-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    {
        imagePath: "25-image.png",
        title: "Title of Work",
        artistName: "Artist Name",
        likesCount: 0,
        commentsCount: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    },
    // {
    //     imagePath: "26-image.png",
    //     title: "Title of Work",
    //     artistName: "Artist Name",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    // },
    // {
    //     imagePath: "27-image.png",
    //     title: "Title of Work",
    //     artistName: "Artist Name",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec metus et erat varius condimentum. Duis gravida ex vel sem aliquet ullamcorper. Sed vel dui et leo blandit efficitur quis a tellus. Donec dictum mollis dictum. Sed dignissim leo a dapibus lobortis. In faucibus augue nulla, pulvinar molestie purus venenatis eu. Nam dignissim, nulla vitae pulvinar tempus, erat augue iaculis nisl, sed semper risus turpis id nibh. Fusce eget gravida urna. Proin tincidunt lacinia elit, non volutpat diam sagittis quis. Aliquam vestibulum augue ligula, ac pharetra erat ultrices id. Nulla cursus diam vitae ultrices placerat."
    // },

]


module.exports = posts
