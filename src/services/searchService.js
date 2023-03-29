// nó có axios dc cấu hình ở request.js, đặt * as để nó lấy hết mấy cái export
import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
