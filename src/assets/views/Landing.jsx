import React from "react";
import "../../index.css";
const Landing = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-4 sm:px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d141c]">
          <LogoIcon />
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Track Life
          </h2>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-4 sm:gap-9">
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Support</NavLink>
          </nav>
          <div className="flex gap-2">
            <Button primary>Sign Up</Button>
            <Button>Login</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Sub-components
const LogoIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-4"
  >
    <path
      d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
      fill="currentColor"
    />
  </svg>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-[#0d141c] text-sm font-medium leading-normal hover:opacity-80 transition-opacity"
  >
    {children}
  </a>
);

const Button = ({ primary, children }) => (
  <button
    className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] ${
      primary ? "bg-[#248bf3] text-slate-50" : "bg-[#e7edf4] text-[#0d141c]"
    }`}
  >
    <span className="truncate">{children}</span>
  </button>
);

const HeroSection = () => (
  <div className="px-4 sm:px-40 flex flex-1 justify-center py-5">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB5NgQcFQXt7I_IJuPftCbsbH75TvRHyV6PuAmG-iekPO2pggguDxlD9bVaJZt5yma6B0y_CngK-Dab9iqs7gHZNEYoy0S3UKsfJg6HYCoSwWjG0RDGtHoHUz-mJYTgCk4Isc1qmZXNYU52oj8iS31-MUZv6soxuImnUMpOh4CbHjIKkS5Vi4W1KScI8rnB8TVK2B2XTEUcx2eKbUnAG7QHByHImhNU6GTnlEd4kpfu8WztUBl5XB8NqPekEalboR__SjIDnpffmfP")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Organize your life. Track goals, money, and habits — all in one
                place.
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                Track Life is the all-in-one app to help you achieve your goals,
                manage your finances, and build healthy habits.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#248bf3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
              <span className="truncate">Get Started Free</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="flex flex-col gap-10 px-4 py-10 @container">
    <div
      className="flex flex-col gap-4"
      style={{ maxWidth: "960px", margin: "auto" }}
    >
      <h1 className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
        All your life's essentials, in one place
      </h1>
      <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
        Track Life helps you stay organized and focused on what matters most,
        with powerful tools for goal setting, financial management, and habit
        tracking.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-0">
      <FeatureCard
        icon="Target"
        title="Goals Tracking"
        description="Set clear, achievable goals and track your progress with visual dashboards and reminders."
      />
      <FeatureCard
        icon="CurrencyCircleDollar"
        title="Money Management"
        description="Manage your budget, track expenses, and visualize your financial health with intuitive tools."
      />
      <FeatureCard
        icon="ListChecks"
        title="Habit Tracker"
        description="Build and maintain healthy habits with customizable trackers and progress reports."
      />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = () => {
    switch (icon) {
      case "Target":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z" />
          </svg>
        );
      case "CurrencyCircleDollar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" />
          </svg>
        );
      case "ListChecks":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4 flex-col">
      <div className="text-[#0d141c]">
        <IconComponent />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[#0d141c] text-base font-bold leading-tight">
          {title}
        </h2>
        <p className="text-[#49739c] text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="flex justify-center border-t border-[#e7edf4]">
    <div className="flex max-w-[960px] flex-1 flex-col">
      <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
        <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </div>
        <p className="text-[#49739c] text-base font-normal leading-normal">
          © 2024 Track Life. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-[#49739c] text-base font-normal leading-normal min-w-40 hover:underline"
  >
    {children}
  </a>
);

export default Landing;
