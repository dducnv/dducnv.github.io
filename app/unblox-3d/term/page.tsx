import Link from 'next/link';

export async function generateMetadata() {
  return {
    title: "Unblox 3D - Terms of Use",
    description:
      "Terms of Use and Lifetime VIP (Pro) Policy for Unblox 3D: 3D Blocks Puzzle Game. Clear breakdown of Pro privileges, free per-level revives and hints, and optional rewarded ads.",
  };
}

const page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto prose lg:prose-xl pt-10 px-5 pb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Terms of Use</h1>
        <p className="text-center text-gray-500">
          <strong>Effective Date:</strong> November 24, 2026
        </p>

        <p className="mt-6">
          Welcome to <strong>Unblox 3D: 3D Blocks Puzzle Game</strong> (&quot;the
          game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These
          Terms of Use (&quot;Terms&quot;) govern your installation, access, and
          use of the Unblox 3D mobile application on iOS and Android devices,
          including all virtual content and the optional{" "}
          <strong>Lifetime VIP (Pro)</strong> upgrade. By downloading, accessing,
          or playing the game, you agree to be bound by these Terms and our{" "}
          <Link
            href="/unblox-3d/privacy-policy"
            className="text-blue-600 underline font-medium"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          1. License to Play
        </h2>
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          limited license to download and play Unblox 3D on compatible mobile
          devices that you own or control, strictly for your personal,
          non-commercial entertainment.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          2. Lifetime VIP (Pro) Upgrade &amp; Transparent Advertising Policy
        </h2>
        <p>
          Unblox 3D is free to download and play, supported by in-game
          advertisements. Players may optionally purchase the{" "}
          <strong>Lifetime VIP (Pro)</strong> one-time non-consumable upgrade.
          To ensure complete transparency before you purchase, please review the
          exact privileges included in Lifetime VIP (Pro) and how optional
          rewarded ads work:
        </p>

        <h3 className="font-semibold text-xl mt-4 mb-2">
          a. What Lifetime VIP (Pro) Includes
        </h3>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>100% Removal of Forced &amp; Banner Ads:</strong> Permanently
            removes all bottom Banner Ads during gameplay and all automatic
            between-level Interstitial Ads. You will never be interrupted by an
            unsolicited or forced pop-up ad.
          </li>
          <li>
            <strong>1 Free +3 Hearts Instant Revive per Level Attempt:</strong>{" "}
            On every level attempt, if you lose all 3 hearts for the first time,
            you receive <strong>1 instant, ad-free +3 Hearts full revive</strong>{" "}
            to continue clearing the board from where you left off. This free
            revive allowance resets automatically whenever you advance to the
            next level, replay a level, or restart the current level.
          </li>
          <li>
            <strong>3 Free Hints Reset on Every Level / Match:</strong> At the
            start of every level, replay, or level restart, your hint balance
            automatically resets to <strong>3 free hints</strong> (maximum 3
            free VIP hints allocated per level).
          </li>
        </ul>

        <h3 className="font-semibold text-xl mt-4 mb-2">
          b. Why Optional Rewarded Ads Remain Available for VIP (Pro) Players
        </h3>
        <p>
          To keep the 3D puzzle gameplay fair, challenging, and rewarding—rather
          than turning the game into an unlimited auto-solve bypass—Lifetime VIP
          (Pro) sets per-level free allowances (3 free hints and 1 free full
          revive per level).{" "}
          <strong>
            Optional, player-initiated Rewarded Video Ads remain in the game
            only when you voluntarily request extra help beyond your free
            per-level VIP allowance:
          </strong>
        </p>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>Extra Hints Within the Same Level (4th+ Hint):</strong> Each
            level starts with <strong>3 free hints</strong>. If you use all 3
            free hints inside a single level (bringing your balance for that
            level down to 0) and want additional hints before completing that
            same level, you may choose to watch a Rewarded Video Ad to receive{" "}
            <strong>+3 extra hints</strong>. As soon as you move to the next
            level or restart the match, your hints automatically reset to 3 free
            hints again.
          </li>
          <li>
            <strong>
              Second+ Revive on the Same Level Attempt (2nd+ Game Over):
            </strong>{" "}
            Your first Game Over on any level attempt is covered by your{" "}
            <strong>Free +3 Hearts VIP Revive</strong> without any ad. If you
            lose all hearts a second (or subsequent) time on that exact same
            board attempt without restarting, continuing that board requires
            watching an optional Rewarded Video Ad for +3 Hearts. Alternatively,
            you can always restart the level for free at any time with full
            hearts and 3 fresh hints.
          </li>
          <li>
            <strong>
              Optional Bonus Rewards (Victory x2 Stars &amp; 3-Level Skin Trials):
            </strong>{" "}
            Optional Rewarded Video Ads also remain available if you
            voluntarily choose to double your earned stars (x2 Stars) on
            eligible Victory screens (such as your daily first win or landmark
            milestones) or to unlock a 3-level trial of an unowned Legendary or
            Mythic 3D block skin in the Skin Gallery. These rewards are 100%
            optional and never appear automatically.
          </li>
        </ul>
        <p className="mt-3">
          <strong>Summary:</strong> With Lifetime VIP (Pro),{" "}
          <strong>no advertisement will ever appear automatically</strong>. An ad
          only plays if you explicitly tap a video reward button—such as extra
          hints beyond 3 per level, a 2nd+ revive in the same level attempt, x2
          Victory stars, or a 3-level skin trial.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          3. In-App Purchases, Billing &amp; Restoration
        </h2>
        <ul className="list-disc pl-10 space-y-2">
          <li>
            <strong>Store Processing:</strong> All In-App Purchases (including
            Lifetime VIP) are processed securely by the Apple App Store (iOS) or
            Google Play Store (Android). We never collect or store your payment
            card or billing credentials.
          </li>
          <li>
            <strong>Non-Consumable Restoration:</strong> Lifetime VIP is a
            one-time, non-consumable purchase tied to your Apple ID or Google
            Play account and may be restored across compatible devices signed in
            to the same store account.
          </li>
          <li>
            <strong>Refunds:</strong> Because all transactions are handled
            directly by Apple or Google, any refund requests are subject to the
            applicable refund policies of the Apple App Store or Google Play
            Store.
          </li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          4. Virtual Items, Skins &amp; Progression
        </h2>
        <p>
          In-game stars, combo streaks, hints, and unlockable 3D block skins are
          virtual items licensed to you as part of gameplay. They have no
          real-world monetary value and cannot be exchanged, sold, or redeemed
          for cash outside the game.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          5. Leaderboards &amp; Fair Play
        </h2>
        <p>
          Unblox 3D integrates with Apple Game Center and Google Play Games
          Services for level and high-combo leaderboards. Tampering with local
          save data, reverse-engineering the app, or submitting falsified scores
          is prohibited and may result in score rejection by our anti-cheat
          verification system.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          6. Disclaimer of Warranties &amp; Limitation of Liability
        </h2>
        <p>
          The game is provided on an &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; basis without warranties of any kind. To the maximum
          extent permitted by applicable law, we shall not be liable for any
          indirect, incidental, or consequential damages arising out of your use
          or inability to use the game. If you explicitly choose{" "}
          <strong>Reset All Data</strong> in the in-game Settings menu, your
          local progress, stars, and unlocked skins on that device will be
          reset, while any purchased Lifetime VIP (Pro) entitlement remains tied
          to your Apple ID or Google Play account and automatically re-syncs
          (or can be restored anytime via <strong>Restore Purchase</strong>).
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">
          7. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time to reflect new features,
          gameplay adjustments, or legal requirements. Any updates will be
          published on this page with an updated &quot;Effective Date&quot;.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-3">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use or the Lifetime VIP
          (Pro) upgrade, please contact us at:
        </p>
        <ul className="list-disc pl-10 mt-2 space-y-1">
          <li>
            Email:{" "}
            <Link
              href="mailto:contact.ducnv@gmail.com"
              className="text-blue-600 underline font-medium"
            >
              contact.ducnv@gmail.com
            </Link>
          </li>
          <li>
            Privacy Policy:{" "}
            <Link
              href="/unblox-3d/privacy-policy"
              className="text-blue-600 underline font-medium"
            >
              https://dducnv.github.io/unblox-3d/privacy-policy
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
