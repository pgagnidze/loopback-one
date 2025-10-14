import { ContainerInner, ContainerOuter } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-700/40 pb-16 pt-10">
          <ContainerInner>
            <div className="flex justify-center">
              <p className="text-sm text-zinc-500">
                Loopback &copy; {new Date().getFullYear()}
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
