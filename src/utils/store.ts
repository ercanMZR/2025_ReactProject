export const isLikesControl = (pid: string) => {
    const stLikes=localStorage.getItem('likes')
    try{
        if(stLikes){
            const arr=JSON.parse(stLikes) as string[]
            const index=arr.indexOf(pid)
            if(index===-1){
                arr.push(pid)
            }else{
                arr.splice(index,1)
            }
            const stArr=JSON.stringify(arr)
            localStorage.setItem('likes',stArr)}
        else{
            const arr=[pid]
            const stArr=JSON.stringify(arr)
            localStorage.setItem('likes',stArr)}

    }catch(error){
        localStorage.removeItem('likes')
        }
    }

    export const getSingleLikes = ( pid: string ) => {
        const stLikes = localStorage.getItem('likes')
        try {
            if (stLikes) {
                const arr = JSON.parse(stLikes) as string[]
                const index = arr.indexOf(pid)
                if(index !== -1) {
                    return true
                }
            }
        } catch (error) {
            localStorage.removeItem("likes")
        }
        return false
     }

    export const getAllLikes = () => {
        const stLikes = localStorage.getItem('likes')
        try {
            if (stLikes) {
                return JSON.parse(stLikes) as string[]
            }
        } catch (error) {
            localStorage.removeItem("likes")
        }
        return []
    }