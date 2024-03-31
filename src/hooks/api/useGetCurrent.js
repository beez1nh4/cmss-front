import useAsync from '../useAsync';
import useToken from '../useToken';
import { getAllCurrent } from '../../services/currentApi';
/* 
export default function useGetHotels() {
  const token = useToken();

  const {
    loading: getHotelsLoading,
    error: getHotelsError,
    act: getHotels
  } = useAsync(() => hotelsApi.getHotels(token), false);

  return {
    getHotelsLoading,
    getHotelsError,
    getHotels
  };
} */

export default function useGetCurrent() {
    //const token = useToken();
  
    const {
      loading: getCurrentLoading,
      error: getCurrentError,
      act: getAllCurrent
    } = useAsync(() => getAllCurrent(), false);
  
    return {
        getCurrentLoading,
        getCurrentError,
        getAllCurrent
    };
  }