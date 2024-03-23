export const getRandomUsers=async()=>{
    const thisData= await fetch(`https://randomuser.me/api/?results=10`)
    const myDataUser=await thisData.json()
    console.log(myDataUser);

}