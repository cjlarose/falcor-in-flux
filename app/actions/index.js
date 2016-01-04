export function doLike(itemId, featureIndex) {
  return {
    type: "FEATURE_LIKE",
    payload: {
      itemId,
      featureIndex
    }
  }
}
