export async function getInfo(api) {
  
    try{
      const request =  await fetch(api);
      const data = await request.json();
      
      const students = data.map((student) => {
        const name = student.name,
          image = student.image,
          patronus = student.patronus;
        
          return {name, image, patronus};
      });

      return students;
      
  }catch(error){
    console.error(`Ha ocurrido un error ${error}`);
  }
}
