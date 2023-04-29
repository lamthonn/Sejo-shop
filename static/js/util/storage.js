const STORAGE_KEY = 'ISDETAIL'

export default{
    //lấy dữ liệu
    get(){
        return (parseInt(localStorage.getItem(STORAGE_KEY)) || 0)
    },
    //lưu
    set(isdetail){
        localStorage.setItem(STORAGE_KEY, isdetail.toString())
    }
}