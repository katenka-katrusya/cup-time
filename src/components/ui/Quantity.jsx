export const Quantity = ({ value, handleDecrease, handleIncrease }) => {
  return (
    <>
      <button onClick={handleDecrease} className='quantity-btn quantity-btn_minus'></button>
      <input className='quantity-input' type='number' value={value} readOnly />
      <button onClick={handleIncrease} className='quantity-btn quantity-btn_plus'></button>
    </>
  )
}
