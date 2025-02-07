document.addEventListener("DOMContentLoaded", function () {
    const codeBlocks = document.querySelectorAll("pre");
    codeBlocks.forEach((codeBlock) => {
      if (codeBlock.className == "mermaid") return;
      const copyButton = document.createElement("button");
      copyButton.className = "copy-code-button";
      copyButton.textContent = "copy";
      // Insert the button inside the <pre> block
      codeBlock.appendChild(copyButton);
    });
  });
  