class SelectionStatus {
  constructor(bool){
    this.tag = 0;
    this.font = {
      color:new set(),
      size:new set(),
      bgColor:new set(),
      lineHeight:new set(),
    }
    this.para = {
      lineHeight:new set(),
      justify:new set(),
      margin:['','','',''],
      padding:['','','',''],
      textIndent:0,
      bgColor:new set(),
    }
  }
  // get bold(){
  //   return this.bold;
  // }
  // set bold(val){
  //   if(val!=this.bold){
  //     this.callback();
  //   }
  //   this.bold = val;
  // }
  //
  // get italic(){
  //   return this.italic;
  // }
  // set italic(val){
  //   if(val!=this.italic){
  //     this.callback();
  //   }
  //   this.italic = italic;
  // }
  //
  // get underline(){
  //   return this.underline;
  // }
  // set underline(val){
  //   if(val!=this.underline){
  //     this.callback();
  //   }
  //   this.underline = val;
  // }
  //
  // get strike(){
  //   return this.strike;
  // }
  // set strike(val){
  //   if(val!=this.strike){
  //     this.callback();
  //   }
  //   this.strike = val;
  // }
  //
  // get sub(){
  //   return this.sub;
  // }
  // set sub(val){
  //   if(val!=this.sub){
  //     this.callback();
  //   }
  //   this.sub = val;
  // }
  //
  // get sup(){
  //   return this.sup;
  // }
  // set sup(val){
  //   if(val!=this.sup){
  //     this.callback();
  //   }
  //   this.sup = val;
  // }

  /**
   * [addCallback description]
   * @param {Function} fn [description]
   */
  addCallback(fn){
    this.callback = fn;
  }
}
