Page({
    data: {
        //  默认选中第0个元素
        value: 0,
        name: "sf",
        num: "",
        message: "",
        array: [
            {
            "com": "顺丰",
            "no": "sf"
            },
            {
            "com": "申通",
            "no": "sto"
            },
            {
            "com": "圆通",
            "no": "yt"
            },
            {
            "com": "韵达",
            "no": "yd"
            },
            {
            "com": "天天",
            "no": "tt"
            },
            {
            "com": "EMS",
            "no": "ems"
            },
            {
            "com": "中通",
            "no": "zto"
            },
            {
            "com": "汇通",
            "no": "ht"
            },
            {
            "com": "全峰",
            "no": "qf"
            },
            {
            "com": "德邦",
            "no": "db"
            },
            {
            "com": "自动匹配",
            "no": "auto"
            },
            {
            "com": "国通",
            "no": "gt"
            },
            {
            "com": "如风达",
            "no": "rfd"
            },
            {
            "com": "京东快递",
            "no": "jd"
            },
            {
            "com": "宅急送",
            "no": "zjs"
            },
            {
            "com": "EMS国际",
            "no": "emsg"
            },
            {
            "com": "Fedex国际",
            "no": "fedex"
            },
            {
            "com": "邮政国内（挂号信）",
            "no": "yzgn"
            },
            {
            "com": "UPS国际快递",
            "no": "ups"
            },
            {
            "com": "中铁快运",
            "no": "ztky"
            }
        ],
        info: []
    },
    bindPickerChange:function(e) {
        console.log(e.detail.value);
        console.log(this.data.array[e.detail.value].no);
        this.setData({
            // 选择以后，设置，选中的序号。
            value: e.detail.value,
            // 通过序号，将no的值付给name
            name: this.data.array[e.detail.value].no
        })
    },
    numHandel:function(e) {
        console.log(e.detail.value);
        this.setData({
            // 后去并且设置输入的编号
            num: e.detail.value
        })
        console.log(e.detail.value);
    },
    searchHandel:function(e) {
        console.log(this.data.name);
        console.log(this.data.num);
        var that = this;
        wx.request({
          url: 'http://v.juhe.cn/exp/index',
          data: {
            com: that.data.name,
            no: that.data.num,
            key: "1a72058aced93a21f5f39d53915451b4"
          },
          method: 'GET',
          header: {
            'content-type': 'application/json'
          },
          success: function(res){
              if(res.data.resultcode == "200") {
                // success
                that.setData({
                    info: res.data.result.list,
                    message: ""
                })
              }
              else {
                  that.setData({
                      message: res.data.reason,
                      info: []
                  })
              }
            console.log(res.data);
          },
          fail: function() {
            // fail
            console.log(res.data);
          },
          complete: function() {
            // complete
          }
        })
    }
})
