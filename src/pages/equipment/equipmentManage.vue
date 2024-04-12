<template>
  <div>
    <a-card class="cardPreview">

      <a-button
        size="small"
        type="primary"
        @click="addDevice"
      >
        添加设备
      </a-button>
      <a-row type="flex">
        <a-col :span="12">
          <a-card class="cardOne">
            <div class="card-body p-0 text-right">
              <video
                id="video"
                class="videoPlayer"
                vtype="webrtc"
                autoplay=""
                controls=""
                muted=""
                playsinline=""
              ></video>
              <a-row type="flex" justify="start" :gutter="10">
                <a-col>
                  <a-button
                    size="small"
                    type="primary"
                    onclick="setVisibleFocus('near')"
                    id="focusNear"
                  >
                    调焦+
                  </a-button>
                </a-col>
                <a-col>
                  <a-button
                    size="small"
                    type="primary"
                    onclick="setVisibleFocus('far')"
                    id="focusNearFar"
                  >
                    调焦-
                  </a-button>
                </a-col>
                <a-col>
                  <a-dropdown type="primary" class="btn">
                    <a-menu slot="overlay" @click="handleMenuClick">
                      <a-menu-item key="1">
                        开
                      </a-menu-item>
                      <a-menu-item key="2">
                        关
                      </a-menu-item>
                    </a-menu>
                    <a-button size="small">
                      雨刷 <a-icon type="down" />
                    </a-button>
                  </a-dropdown>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card class="cardOne">
            <div class="card-body p-0 text-right">
              <video
                id="videoPlayerIR"
                class="videoPlayer"
                vtype="webrtc"
                autoplay=""
                controls=""
                muted=""
                playsinline=""
              ></video>
              <a-row type="flex" justify="start" :gutter="10">
                <a-col>
                  <a-button
                    size="small"
                    type="primary"
                    onclick="setupShedualSubmit()"
                    >红外定时</a-button
                  >
                </a-col>
                <a-col>
                  <a-dropdown type="primary" class="btn-group">
                    <a-button
                      size="small"
                      class="btn dropdown-toggle"
                      type="primary"
                      id="dropdownMenuModel"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      红外机芯
                      <a-icon type="down" />
                    </a-button>
                    <a-menu slot="overlay" @click="handleMenuClick">
                      <a-menu-item
                        key="1"
                        class="dropdown-item"
                        href="#"
                        onclick="setIRPower('on')"
                        >开</a-menu-item
                      >
                      <a-menu-item
                        key="2"
                        class="dropdown-item"
                        href="#"
                        onclick="setIRPower('off')"
                        >关</a-menu-item
                      >
                    </a-menu>
                  </a-dropdown>
                </a-col>
                <a-col>
                  <a-button
                    size="small"
                    type="primary"
                    id="far"
                    onclick="setIRFocus('near')"
                  >
                    调焦+
                  </a-button>
                </a-col>
                <a-col>
                  <a-button
                    size="small"
                    type="primary"
                    id="near"
                    onclick="setIRFocus('far')"
                  >
                    调焦-
                  </a-button>
                </a-col>
                <a-col>
                  <a-dropdown>
                    <a-button
                      size="small"
                      id="dropdownMenuModel"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      切换色板 <a-icon type="down" />
                    </a-button>
                    <a-menu slot="overlay" @click="handleMenuClick">
                      <a-menu-item key="1">
                        白热
                      </a-menu-item>
                      <a-menu-item key="2">
                        铁红
                      </a-menu-item>
                      <a-menu-item key="3">
                        熔岩
                      </a-menu-item>
                      <a-menu-item key="4">
                        彩虹
                      </a-menu-item>
                      <a-menu-item key="5">
                        极寒
                      </a-menu-item>
                      <a-menu-item key="6">
                        色盘
                      </a-menu-item>
                      <a-menu-item key="7">
                        极冷
                      </a-menu-item>
                      <a-menu-item key="8">
                        极热
                      </a-menu-item>
                      <a-menu-item key="9">
                        高对比彩虹
                      </a-menu-item>
                      <a-menu-item key="10">
                        黑热
                      </a-menu-item>
                    </a-menu>
                  </a-dropdown>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <a-row type="flex" justify="center">
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_1.svg"
          @mousedown="operate('startUpLeft')"
          @mouseup="operate('endUpLeft')"
        />
      </a-col>
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_2.svg"
          @mousedown="operate('startUp')"
          @mouseup="operate('endUp')"
        />
      </a-col>
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_3.svg"
          @mousedown="operate('startUpRight')"
          @mouseup="operate('endUpRight')"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_4.svg"
          @mousedown="operate('startLeft')"
          @mouseup="operate('endLeft')"
        />
      </a-col>
      <a-col :span="2">
        <img src="@/assets/img/ptz_5.svg" onclick="operate('zero','left')" />
      </a-col>
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_6.svg"
          @mousedown="operate('startRight')"
          @mouseup="operate('endRight')"
        />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_7.svg"
          @mousedown="operate('startDownLeft')"
          @mouseup="operate('endDownLeft')"
        />
      </a-col>
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_8.svg"
          @mousedown="operate('startDown')"
          @mouseup="operate('endDown')"
        />
      </a-col>
      <a-col :span="2">
        <img
          src="@/assets/img/ptz_9.svg"
          @mousedown="operate('startDownRight')"
          @mouseup="operate('endDownRight')"
        />
      </a-col>
    </a-row>
    <addModal v-model="visible"></addModal>
    <setupModal v-model="setupvisible"></setupModal>
  </div>
</template>

<script>
import addModal from "./components/addModel.vue";
import setupModal from "./components/setupModal.vue";
import { equipment, preview } from "@/services/equipment";
import Hls from "hls.js";
export default {
  data() {
    return {
      // refresh: true
      visible: false,
      setupvisible: false,
      rtmpUrl: '',
      playerOptions: {
        height: "300",
        width: "600",
        sources: [
          {
            type: "rtmp/mp4",
            src: "rtmp://liteavapp.qcloud.com/live/liteavdemoplayerstreamid?transportmode=unicast",
          },
        ],
        techOrder: ["flash"],
        autoplay: true,
        controls: true,
      },
    };
  },
  components: {
    addModal,
    setupModal
  },
  created() {
    
  },
  mounted() {
    preview({deviceName: '32323'}).then(() => {
      if (Hls.isSupported()) {
          var video = document.getElementById('video');
          var hls = new Hls();
          // hls.loadSource(res.msg);
          hls.loadSource('rtmp://liteavapp.qcloud.com/live/liteavdemoplayerstreamid?transportmode=unicast');
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED,function() {
            video.play();
          });
        }
    })
  },
  computed: {},
  methods: {
    addDevice() {
      this.visible = true;
    },
    operate(direction) {
      console.log('操作方向：', direction);
      equipment(direction, '23232323').then()
    },
    handleMenuClick() {
      console.log(111);
    },
    onPlayerPause(player) {
      console.log(player);
    },

  },
};
</script>
<style>
/* .cardPreview .ant-card-head {
  background-color: #007bff;
  border-radius: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: #fff;
  display: flex;
} */
.ant-col {
  cursor: pointer;
}
.videoPlayer {
  width: 100%;
}
.cardOne {
  border: none;
  padding: 10px;
  /* float:left */
  /* width:50% */
}
.cardTne {
  border: none;
  /* float:right */
  /* width:50% */
}
.cardOne .ant-card-body {
  background-color: currentcolor;
  padding: 0;
  margin-bottom: 10px;
}
.cardTne .ant-card-body {
  background-color: currentcolor;
  padding: 0;
}
.divBtn {
  float: right;
}
</style>
