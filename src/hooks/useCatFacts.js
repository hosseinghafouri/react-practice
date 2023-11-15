import { useQuery } from "react-query";
import Axios from 'axios'

export const useCatFacts = ()=> {
    const {data, isLoading, isError, error, refetch} = useQuery(["cat"], async () => {
        return Axios.get(`https://catfact.ninja/fact`).then((res) => res.data)
      });

      const refetchData = () => {
        alert("data refetch");
        refetch();
      }

      return {data, isLoading, isError, error, refetchData}
}