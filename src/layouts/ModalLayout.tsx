import type { ParentProps } from 'solid-js'

export default function ModalLayout(props: ParentProps) {
  return (
    <dialog id="modal" class="backdrop:bg-black/80">
      <div class="max-w-md p-4 rounded-md bg-white shadow-md">
        {props.children}
      </div>
    </dialog>
  )
}
