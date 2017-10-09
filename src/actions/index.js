const createEdt = (payload)=>{
  return {
    type:'create',
    payload
  }
}

const command = (payload)=>{
  return {
    type:'command',
    payload
  }
}

const change = (payload)=>{
  return {
    type:'change',
    payload
  }
}

export {
  command,
  change
}
