// i18n
import { getJson } from '@/i18n/utils'

// Types
import type { Language } from '@/types/language'

// Constants
import { ENGLISH_CODE } from '@/constants/i18n'

// Utils
import { $ } from '@/utils/dom'

interface Props {
  type: 'affirmative' | 'negative'
  id: 'yes-btn' | 'no-btn'
  language: Language
}

export default function ModalButton(props: Props) {
  // eslint-disable-next-line solid/reactivity
  const { modal } = getJson(props.language)

  const handleClick = () => {
    const dialogContainer = $('#dialog-container')

    if (dialogContainer == null) return

    if (props.id === 'no-btn') return dialogContainer.remove()

    location.assign(props.language === ENGLISH_CODE ? '/en' : '/')
  }

  return (
    <button
      type="button"
      id={props.id}
      class="inline-flex items-center justify-center px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-800 hover:scale-105 active:scale-90 text-center text-pretty w-full text-lg"
      onClick={handleClick}
    >
      {props.type === 'affirmative' ? modal.yes : 'No'}
    </button>
  )
}
