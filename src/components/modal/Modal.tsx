// Components
import ModalLayout from '@/layouts/ModalLayout'
import ModalButton from '../buttons/ModalButton'

// i18n
import { getJson, getLangFromUrl } from '@/i18n/utils'

// Utils
import { $ } from '@/utils/dom'

// Constants
import { ENGLISH_CODE } from '@/constants/i18n'

// SolidJS
import { createEffect } from 'solid-js'

interface Props {
  i18nURL: URL
}

export default function Modal(props: Props) {
  const language = getLangFromUrl(props.i18nURL)

  const { modal } = getJson(language === ENGLISH_CODE ? 'es' : 'en')

  createEffect(() => {
    const modal = $('#modal')

    if (
      modal instanceof HTMLDialogElement &&
      !navigator.language.includes(language)
    ) {
      modal.showModal()
    }
  })

  return (
    <ModalLayout>
      <h3 class="text-black text-lg text-center text-pretty font-semibold">
        {modal.text}
      </h3>
      <div class="flex flex-col items-center justify-center mt-4 gap-3">
        <ModalButton type="affirmative" id="yes-btn" i18nURL={props.i18nURL} />
        <ModalButton type="negative" id="no-btn" i18nURL={props.i18nURL} />
      </div>
    </ModalLayout>
  )
}
