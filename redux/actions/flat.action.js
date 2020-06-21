export const DELETE_FLAT = 'DELETE_FLAT';

export const deleteFlat = flatId => {
  return { type: DELETE_FLAT, fid: flatId}
}
