<template>
  <div class="goods-card">
    <div class="img-box">
      <img :src="goods.image" />
      <span class="coverly"></span>
    </div>
    <div class="bottom-half">
      <div class="title">{{goods.title}}</div>
      <div class="operate-box">
        <div class="left half">
          <span class="iconfont like">&#xe62f;</span>
          <span>{{goods.like}}</span>
        </div>
        <div class="right half">
          <span class="iconfont views">&#xe62e;</span>
          <span>{{goods.follow}}</span>
        </div>
      </div>
      <div class="middle-line"></div>
      <div class="user-box">
        <img :src="goods.avatar" class="avatar" />
        <span class="name">{{goods.username}}</span>
        <span class="time">{{goods.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods-card",
  props: {
    goods: {
      type: Object,
      default: {
        /* image: {
          type: String,
          default: ""
        },
        title: {
          type: String,
          default: ""
        },
        avatar: {
          type: String,
          default: ""
        },
        username: {
          type: String,
          default: ""
        },
        time: {
          type: String,
          default: ""
        },
        like: {
          type: Number,
          default: 0
        },
        follow: {
          type: Number,
          default: 0
        } */
      }
    }
  }
};
</script>

<style lang="less" scoped>
.goods-card {
  width: 286px;
  height: 396px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
  border-radius: 2px;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .img-box {
      img {
        transform: scale(1.14);
      }
      .coverly {
        background-color: rgba(0, 0, 0, 0.14);
      }
    }
  }
  .img-box {
    position: relative;
    height: 230px;
    border-radius: 2px 2px 0px 0px;
    overflow: hidden;
    img {
      display: block;
      object-fit: contain;
      object-position: center center;
      transform: scale(1);
      transition: 400ms;
    }
    .coverly {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0);
      transition: 240ms;
    }
  }
  .bottom-half {
    padding: 0 10px;
    .title {
      margin-top: 20px;
      font-size: 18px;
    }
    .operate-box {
      margin-top: 8px;
      line-height: 20px;
      color: #999;
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 4px;
        &.like {
          font-size: 17px;
        }
        &.views {
          font-size: 14px;
        }
      }
      .right {
        margin-left: 20px;
      }
    }
    .middle-line {
      margin-top: 20px;
      border-bottom: 1px dashed rgba(217, 217, 217, 1);
    }
    .user-box {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .avatar {
        width: 32px;
        height: 32px;
        border: 1px solid #999;
        border-radius: 100%;
      }
      .name {
        margin-left: 10px;
        font-size: 16px;
      }
      .time {
        flex: 1;
        text-align: right;
        color: #999;
      }
    }
  }
}
</style>
