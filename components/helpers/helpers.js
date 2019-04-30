const helper = {
  calcLongest(data) {
    let longest = 0;
    const arr = []
    data.forEach(obj => {
      if (obj.choices.length > longest) {
        longest = obj.choices.length;
      }
    })
    for (let i = 0; i < longest; i++) {
      arr.push(i + 1)
    }
    return arr
  }
}
export default helper
