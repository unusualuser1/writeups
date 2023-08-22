export type itemsProps = {
    items : {
      name : string,
      path : string,
      sha : string
      decodedContent : string
    }[],
    options : { value : string}[],
}