<template>
  <div class="workmeta">
    <div class="main">
      <!-- <template v-if="datas.length">
        <componentItems id="_workspace" />
      </template> -->
      <template v-if="datas.length">
        <grid-layout
          :layout="datas"
          :col-num="colNum"
          :row-height="rowHeight"
          :is-draggable="draggable"
          :is-resizable="resizable"
          :is-mirrored="mirrored"
          :vertical-compact="verticalCompact"
          :margin="[10, 10]"
          :use-css-transforms="true"
          @layout-created="layoutCreatedEvent"
          @layout-before-mount="layoutBeforeMountEvent"
          @layout-mounted="layoutMountedEvent"
          @layout-ready="layoutReadyEvent"
          @layout-updated="layoutUpdatedEvent"
          @move-event="moveEvent"
          style="height:initial"
        >
          <grid-item
            v-for="(item, index) in datas"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :min-h="1"
            :min-w="6"
            :key="index"
            class="layout-item"
            :static="item.static"
            drag-allow-from=".vue-draggable-handle"
            drag-ignore-from=".no-drag"
            ><div class="vue-draggable-handle"></div>
            <div class="no-drag">
              <componentItems />
            </div>
          </grid-item>
        </grid-layout>
      </template>
      <Empty v-else :emptyText="emptyText" />
    </div>
  </div>
</template>

<script>
import componentItems from './componentItems'
import VueGridLayout from 'vue-grid-layout'
import Empty from './Empty'
export default {
  components: {
    componentItems,
    Empty,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      datas: [
        {
          type: 'layout-container',
          x: 0,
          y: 0,
          w: 24,
          h: 4,
          static: false,
          i: 0,
          children: [
            {
              type: 'form',
              children: [
                {
                  type: 'button',
                },
                {
                  type: 'input',
                },
                {
                  type: 'select',
                },
              ],
            },
            {
              type: 'table',
              columns: [{}],
            },
          ],
        },
        {
          type: 'layout-container',
          x: 0,
          y: 0,
          w: 24,
          h: 4,
          static: false,
          i: 0,
          children: [
            {
              type: 'form',
              children: [
                {
                  type: 'button',
                },
                {
                  type: 'input',
                },
                {
                  type: 'select',
                },
              ],
            },
            {
              type: 'table',
              columns: [{}],
            },
          ],
        },
      ],
      emptyText: '拖拽或添加组件到此处',
      layouts: [],
      draggable: true,
      resizable: true,
      mirrored: false,
      rowHeight: 30,
      colNum: 24,
      verticalCompact: true,
    }
  },
  methods: {
    setProps(item) {
      this.dialogVisible = true
      this.item = item
      item.props.type = ['primary', 'danger', 'info', 'warning', 'success'][parseInt(Math.random() * 4)]
    },
    delelteItem(i) {
      this.$store.dispatch('delComponent', i)
    },
    layoutCreatedEvent: function(newLayout) {
      console.log('Created layout: ', newLayout)
    },
    layoutBeforeMountEvent: function(newLayout) {
      console.log('beforeMount layout: ', newLayout)
    },
    layoutMountedEvent: function(newLayout) {
      console.log('Mounted layout: ', newLayout)
    },
    layoutReadyEvent: function(newLayout) {
      console.log('Ready layout: ', newLayout)
    },
    layoutUpdatedEvent: function(newLayout) {
      console.log('Updated layout: ', newLayout)
    },
    moveEvent: function(i, newX, newY) {
      console.log('MOVE i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resizeEvent: function(i, newH, newW, newHPx, newWPx) {
      console.log('RESIZE i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
    movedEvent: function(i, newX, newY) {
      console.log('MOVED i=' + i + ', X=' + newX + ', Y=' + newY)
    },
    resizedEvent: function(i, newH, newW, newHPx, newWPx) {
      console.log('RESIZED i=' + i + ', H=' + newH + ', W=' + newW + ', H(px)=' + newHPx + ', W(px)=' + newWPx)
    },
  },
}
</script>

<style lang="less" scoped>
.workmeta {
  height: 100%;
  overflow-y: auto;
  background-color: #ebebeb;
  .main {
    margin: 10px;
    border: 1px dashed;
    overflow: auto;
    padding: 10px;
    min-height: -webkit-fill-available;
  }

  .layout-item {
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    .vue-draggable-handle {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 0;
      left: 0;
      background: url(data:image/svg+xml;utf8,<svg xmlns=http://www.w3.org/2000/svg width=10 height=10><circle cx=5 cy=5 r=5 fill=#999999/></svg>)
        no-repeat;
      background-position: bottom right;
      padding: 0 8px 8px 0;
      background-repeat: no-repeat;
      background-origin: content-box;
      box-sizing: border-box;
      cursor: pointer;
    }
    .top-header {
      display: flex;
      justify-content: space-between;
      height: 30px;

      .top-button {
        opacity: 0;
      }
    }

    .layout-content {
      // border: 1px dashed #333;
      padding: 5px;
      box-sizing: border-box;
      height: calc(100% - 40px);
      .empty-tip {
        border: none;
      }
    }
  }

  .layout-item:hover {
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 16px 24px 0 rgba(170, 182, 206, 0.36);
    transition: box-shadow 0.3s ease-in-out;

    .top-button {
      opacity: 1;
      transition: opacity 0.9s;
    }
  }
}
</style>
