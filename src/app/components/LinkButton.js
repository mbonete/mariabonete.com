import { DesktopButton, MobileMenuButton } from "../styled-components/DesktopButton";

function LinkButton ({ children, href, download=null, menu='desktop'}) {
  let Button = menu === 'mobile' ? MobileMenuButton : DesktopButton;

  return (
    <Button href={href} download={download} target="_blank">{children}</Button>
  )
}

export default LinkButton;