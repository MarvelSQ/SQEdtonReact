import Edt from '../SQEdt';

const editor = (state = {}, action)=>{
  switch (action.type){
    case 'create':
      this.state.edt = new Edt(action.payload.el);
      break;
    case 'command':
      this.state.command = action.payload;
      break;
    case 'change':
      this.state.command = action.payload;
      break;
    default:
      break;
  }
}

export default editor;
