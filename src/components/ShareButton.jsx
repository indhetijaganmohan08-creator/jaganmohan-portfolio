import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const portfolioUrl = window.location.href;

    const shareData = {
      title: "Jagan Mohan Indheti | Machine Learning Engineer",
      text: "Check out Jagan Mohan Indheti's professional portfolio.",
      url: portfolioUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(portfolioUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(portfolioUrl);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (copyError) {
        console.error("Unable to share portfolio:", copyError);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="navbar-share-button"
      aria-label="Share Portfolio"
      title="Share Portfolio"
    >
      {copied ? (
        <Check size={16} />
      ) : (
        <Share2 size={16} />
      )}

      <span>
        {copied ? "Copied" : "Share"}
      </span>
    </button>
  );
}