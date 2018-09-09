define({ "api": [  {    "type": "get",    "url": "/common/getAddress",    "title": "getAddress",    "description": "<p>获取首页导航栏信息</p>",    "group": "common",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>返回首页导航栏信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"data\": {}\n  }",          "type": "json"        }      ]    },    "filename": "routes/common.js",    "groupTitle": "common",    "name": "GetCommonGetaddress"  },  {    "type": "get",    "url": "/common/getHomeData",    "title": "getHomeData",    "description": "<p>获取首页导航栏信息</p>",    "group": "common",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>返回首页导航栏信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"msg\": null,\n    \"data\": []\n  }",          "type": "json"        }      ]    },    "filename": "routes/common.js",    "groupTitle": "common",    "name": "GetCommonGethomedata"  },  {    "type": "get",    "url": "/shopping/goods",    "title": "goods",    "description": "<p>获取商家餐品列表</p>",    "group": "shopping",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>返回商家餐品列表</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"msg\": null,\n    \"data\": []\n  }",          "type": "json"        }      ]    },    "filename": "routes/shopping.js",    "groupTitle": "shopping",    "name": "GetShoppingGoods"  },  {    "type": "get",    "url": "/shopping/ratings",    "title": "ratings",    "description": "<p>获取商家评价列表</p>",    "group": "shopping",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>返回商家评价列表</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"msg\": null,\n    \"data\": []\n  }",          "type": "json"        }      ]    },    "filename": "routes/shopping.js",    "groupTitle": "shopping",    "name": "GetShoppingRatings"  },  {    "type": "get",    "url": "/shopping/restaurants",    "title": "restaurants",    "description": "<p>获取商家列表</p>",    "group": "shopping",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>返回商家列表信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"msg\": null,\n    \"data\": []\n  }",          "type": "json"        }      ]    },    "filename": "routes/shopping.js",    "groupTitle": "shopping",    "name": "GetShoppingRestaurants"  },  {    "type": "get",    "url": "/shopping/seller",    "title": "seller",    "description": "<p>获取商家详情</p>",    "group": "shopping",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>返回商家详情信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"code\": 0,\n    \"msg\": null,\n    \"data\": {}\n  }",          "type": "json"        }      ]    },    "filename": "routes/shopping.js",    "groupTitle": "shopping",    "name": "GetShoppingSeller"  },  {    "type": "post",    "url": "/user/login",    "title": "login",    "description": "<p>用户登陆(新用户自动注册)</p>",    "group": "user",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>手机号</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>密码</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>返回用户信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n     {\n       \"code\": 0,\n       \"msg\": \"登录成功\",\n       \"data\": {\n\t \"_id\":\"5b7a61bo5661e20e3o8e7764\",\n\t \"user_id\":\"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5\",\n\t \"mobile\":\"13818334060\",\n\t \"password\":\"F3kcH9qCfhvrFYeop2s8AC==\",\n\t \"username\":\"啦啦啦\",\n\t \"create_time\":\"2018-09-01 17:54:04\",\n\t \"__v\":0,\t\n\t \"avatar\":null\n\t}\n     }",          "type": "json"        }      ]    },    "filename": "routes/user.js",    "groupTitle": "user",    "name": "PostUserLogin"  },  {    "type": "post",    "url": "/user/retsetName",    "title": "retsetName",    "description": "<p>修改用户名</p>",    "group": "user",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>用户名</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>返回用户信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n     {\n       \"code\": 0,\n       \"msg\": \"更新用户信息成功\",\n       \"data\": {\n\t \"_id\":\"5b7a61bo5661e20e3o8e7764\",\n\t \"user_id\":\"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5\",\n\t \"mobile\":\"13818334060\",\n\t \"password\":\"F3kcH9qCfhvrFYeop2s8AC==\",\n\t \"username\":\"啦啦啦\",\n\t \"create_time\":\"2018-09-01 17:54:04\",\n\t \"__v\":0,\t\n\t \"avatar\":null\n\t}\n     }",          "type": "json"        }      ]    },    "filename": "routes/user.js",    "groupTitle": "user",    "name": "PostUserRetsetname"  },  {    "type": "post",    "url": "/user/retsetPassword",    "title": "retsetPassword",    "description": "<p>修改密码</p>",    "group": "user",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "oldpassword",            "description": "<p>原始密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "newpassword",            "description": "<p>新密码</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "code",            "description": "<p>成功状态码</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>返回信息</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>返回用户信息</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "   HTTP/1.1 200 OK\n     {\n       \"code\": 0,\n       \"msg\": \"更新密码成功\",\n       \"data\": {\n\t \"_id\":\"5b7a61bo5661e20e3o8e7764\",\n\t \"user_id\":\"f5d746a1-adkk-11e6-8146-0b4ccjkd1fd5\",\n\t \"mobile\":\"13818334060\",\n\t \"password\":\"F3kcH9qCfhvrFYeop2s8AC==\",\n\t \"username\":\"啦啦啦\",\n\t \"create_time\":\"2018-09-01 17:54:04\",\n\t \"__v\":0,\t\n\t \"avatar\":null\n\t}\n     }",          "type": "json"        }      ]    },    "filename": "routes/user.js",    "groupTitle": "user",    "name": "PostUserRetsetpassword"  }] });
