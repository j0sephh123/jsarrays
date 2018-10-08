
const items = {
  namespaced: true,
  state: {     
    items: [
      {_id: 1, name: 'splice', dropdown: false, properties: [
        {_id: 1, name: 'start'},
        {_id: 2, name: 'deleteCount'},
        {_id: 3, name: 'item1'},
        {_id: 4, name: 'item2'},
      ]},
      {_id: 2, name: 'filter', dropdown: false},
    ],
  },
  mutations: {
    setDropdown(state, {id}) {
      const result = state.items.find(i => i._id === id);
      console.log(result);
    }
  },
  actions: {
    
  },
  getters: {
    items: state => state.items,
  }
}

export default items;