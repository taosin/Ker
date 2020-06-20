const layout = {
  state: {
    elements: [
      {
        name: 'el-form',
        props: {
          'label-width': '180px',
          'label-position': 'rigth',
        },
        children: [
          {
            name: 'el-form-item',
            props: {
              label: '姓名',
              value: '3131',
            },
            children: [
              {
                name: 'el-input',
                props: {
                  type: 'textarea',
                  size: 'large',
                  value: '3131',
                  'v-model': 'sddsds',
                },
                text: 'username',
              },
            ],
          },
          {
            name: 'el-form-item',
            props: {
              label: '请选择请选择请选择请选择',
            },
            children: [
              {
                name: 'el-select',
                props: {
                  size: 'small',
                  placeholder: '请选择',
                  'v-model': 'type',
                  value: '1',
                  clearable: true,
                },
                children: [
                  {
                    name: 'el-option',
                    text: '选项一',
                    props: {
                      value: 'type',
                    },
                  },
                  {
                    name: 'el-option',
                    text: '选项e',
                    props: {
                      value: '2',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    layouts: [
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
  },
  mutations: {
    updateElements: (state, payload) => {
      state.elements = payload
    },
  },
  actions: {
    updateElements: ({ commit }, payload) => {
      commit('updateElements', payload)
    },
  },
  getters: {},
}
export default layout
