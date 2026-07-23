import { useState } from 'react'
import Icon from '../common/Icon'

function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="hh-card divide-y divide-white/8 overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-bold text-white-100 transition-colors hover:text-emerald-300 sm:px-7"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-emerald-300 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold-400 text-black-950' : ''}`}
              >
                <Icon name={isOpen ? 'minus' : 'plus'} className="size-4" strokeWidth={2.2} />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-mist-500 sm:px-7">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqList
