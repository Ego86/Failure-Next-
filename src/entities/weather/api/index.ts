

// let  isLoad: boolean = false
// interface IWeather {
//   "city": string,
//   "country": string,
//   "latitude": number,
//   "longitude": number,
//   "weather": {
//     "time": string | never,
//     "interval": number,
//     "temperature": number,
//     "windspeed": number,
//     "winddirection": number,
//     "is_day": number,
//     "weathercode": number
//   }
// }
// export const fetchWeather = async (): Promise<{data: IWeather, isLoad: boolean} | string> => {
//   isLoad = true
//     try {
//     const res = await fetch("/api/weather", {
//       next: {
//         revalidate: 3600
//       }
//     });
//     if(res.status > 300) {
//         throw Error("error get Data")
//     }
//     const data:IWeather = await res.json();
//     isLoad = false
//     return {data, isLoad}
//   } catch (error) {
//     console.error("Ошибка при получении погоды:", error);
//     return error.message
//   }
// }
