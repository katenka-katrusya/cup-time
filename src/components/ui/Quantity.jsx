export const Quantity = () => {
  return (
    <>
      <button className='quantity-btn quantity-btn_minus'></button>
      <input className='quantity-input' type='number' value={1} />
      <button className='quantity-btn quantity-btn_plus'></button>
    </>
  )
}
