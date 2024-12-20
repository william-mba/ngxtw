export type Size =
  | 'size-0'
  | 'size-px'
  | 'size-0.5'
  | 'size-1'
  | 'size-1.5'
  | 'size-2'
  | 'size-2.5'
  | 'size-3'
  | 'size-3.5'
  | 'size-4'
  | 'size-5'
  | 'size-6'
  | 'size-7'
  | 'size-8'
  | 'size-9'
  | 'size-10'
  | 'size-11'
  | 'size-12'
  | 'size-14'
  | 'size-16'
  | 'size-20'
  | 'size-24'
  | 'size-28'
  | 'size-32'
  | 'size-36'
  | 'size-40'
  | 'size-44'
  | 'size-48'
  | 'size-52'
  | 'size-56'
  | 'size-60'
  | 'size-64'
  | 'size-72'
  | 'size-80'
  | 'size-96'
  | 'size-auto'
  | 'size-1/2'
  | 'size-1/3'
  | 'size-2/3'
  | 'size-1/4'
  | 'size-2/4'
  | 'size-3/4'
  | 'size-1/5'
  | 'size-2/5'
  | 'size-3/5'
  | 'size-4/5'
  | 'size-1/6'
  | 'size-2/6'
  | 'size-3/6'
  | 'size-4/6'
  | 'size-5/6'
  | 'size-1/12'
  | 'size-2/12'
  | 'size-3/12'
  | 'size-4/12'
  | 'size-5/12'
  | 'size-6/12'
  | 'size-7/12'
  | 'size-8/12'
  | 'size-9/12'
  | 'size-10/12'
  | 'size-11/12'
  | 'size-full'
  | 'size-screen'
  | 'size-svw'
  | 'size-lvw'
  | 'size-dvw'
  | 'size-min'
  | 'size-max'
  | 'size-fit'
  | '*:size-0'
  | '*:size-px'
  | '*:size-0.5'
  | '*:size-1'
  | '*:size-1.5'
  | '*:size-2'
  | '*:size-2.5'
  | '*:size-3'
  | '*:size-3.5'
  | '*:size-4'
  | '*:size-5'
  | '*:size-6'
  | '*:size-7'
  | '*:size-8'
  | '*:size-9'
  | '*:size-10'
  | '*:size-11'
  | '*:size-12'
  | '*:size-14'
  | '*:size-16'
  | '*:size-20'
  | '*:size-24'
  | '*:size-28'
  | '*:size-32'
  | '*:size-36'
  | '*:size-40'
  | '*:size-44'
  | '*:size-48'
  | '*:size-52'
  | '*:size-56'
  | '*:size-60'
  | '*:size-64'
  | '*:size-72'
  | '*:size-80'
  | '*:size-96'
  | '*:size-auto'
  | '*:size-1/2'
  | '*:size-1/3'
  | '*:size-2/3'
  | '*:size-1/4'
  | '*:size-2/4'
  | '*:size-3/4'
  | '*:size-1/5'
  | '*:size-2/5'
  | '*:size-3/5'
  | '*:size-4/5'
  | '*:size-1/6'
  | '*:size-2/6'
  | '*:size-3/6'
  | '*:size-4/6'
  | '*:size-5/6'
  | '*:size-1/12'
  | '*:size-2/12'
  | '*:size-3/12'
  | '*:size-4/12'
  | '*:size-5/12'
  | '*:size-6/12'
  | '*:size-7/12'
  | '*:size-8/12'
  | '*:size-9/12'
  | '*:size-10/12'
  | '*:size-11/12'
  | '*:size-full'
  | '*:size-screen'
  | '*:size-svw'
  | '*:size-lvw'
  | '*:size-dvw'
  | '*:size-min'
  | '*:size-max'
  | '*:size-fit'
  | 'sm:size-0'
  | 'sm:size-px'
  | 'sm:size-0.5'
  | 'sm:size-1'
  | 'sm:size-1.5'
  | 'sm:size-2'
  | 'sm:size-2.5'
  | 'sm:size-3'
  | 'sm:size-3.5'
  | 'sm:size-4'
  | 'sm:size-5'
  | 'sm:size-6'
  | 'sm:size-7'
  | 'sm:size-8'
  | 'sm:size-9'
  | 'sm:size-10'
  | 'sm:size-11'
  | 'sm:size-12'
  | 'sm:size-14'
  | 'sm:size-16'
  | 'sm:size-20'
  | 'sm:size-24'
  | 'sm:size-28'
  | 'sm:size-32'
  | 'sm:size-36'
  | 'sm:size-40'
  | 'sm:size-44'
  | 'sm:size-48'
  | 'sm:size-52'
  | 'sm:size-56'
  | 'sm:size-60'
  | 'sm:size-64'
  | 'sm:size-72'
  | 'sm:size-80'
  | 'sm:size-96'
  | 'sm:size-auto'
  | 'sm:size-1/2'
  | 'sm:size-1/3'
  | 'sm:size-2/3'
  | 'sm:size-1/4'
  | 'sm:size-2/4'
  | 'sm:size-3/4'
  | 'sm:size-1/5'
  | 'sm:size-2/5'
  | 'sm:size-3/5'
  | 'sm:size-4/5'
  | 'sm:size-1/6'
  | 'sm:size-2/6'
  | 'sm:size-3/6'
  | 'sm:size-4/6'
  | 'sm:size-5/6'
  | 'sm:size-1/12'
  | 'sm:size-2/12'
  | 'sm:size-3/12'
  | 'sm:size-4/12'
  | 'sm:size-5/12'
  | 'sm:size-6/12'
  | 'sm:size-7/12'
  | 'sm:size-8/12'
  | 'sm:size-9/12'
  | 'sm:size-10/12'
  | 'sm:size-11/12'
  | 'sm:size-full'
  | 'sm:size-screen'
  | 'sm:size-svw'
  | 'sm:size-lvw'
  | 'sm:size-dvw'
  | 'sm:size-min'
  | 'sm:size-max'
  | 'sm:size-fit'
  | 'md:size-0'
  | 'md:size-px'
  | 'md:size-0.5'
  | 'md:size-1'
  | 'md:size-1.5'
  | 'md:size-2'
  | 'md:size-2.5'
  | 'md:size-3'
  | 'md:size-3.5'
  | 'md:size-4'
  | 'md:size-5'
  | 'md:size-6'
  | 'md:size-7'
  | 'md:size-8'
  | 'md:size-9'
  | 'md:size-10'
  | 'md:size-11'
  | 'md:size-12'
  | 'md:size-14'
  | 'md:size-16'
  | 'md:size-20'
  | 'md:size-24'
  | 'md:size-28'
  | 'md:size-32'
  | 'md:size-36'
  | 'md:size-40'
  | 'md:size-44'
  | 'md:size-48'
  | 'md:size-52'
  | 'md:size-56'
  | 'md:size-60'
  | 'md:size-64'
  | 'md:size-72'
  | 'md:size-80'
  | 'md:size-96'
  | 'md:size-auto'
  | 'md:size-1/2'
  | 'md:size-1/3'
  | 'md:size-2/3'
  | 'md:size-1/4'
  | 'md:size-2/4'
  | 'md:size-3/4'
  | 'md:size-1/5'
  | 'md:size-2/5'
  | 'md:size-3/5'
  | 'md:size-4/5'
  | 'md:size-1/6'
  | 'md:size-2/6'
  | 'md:size-3/6'
  | 'md:size-4/6'
  | 'md:size-5/6'
  | 'md:size-1/12'
  | 'md:size-2/12'
  | 'md:size-3/12'
  | 'md:size-4/12'
  | 'md:size-5/12'
  | 'md:size-6/12'
  | 'md:size-7/12'
  | 'md:size-8/12'
  | 'md:size-9/12'
  | 'md:size-10/12'
  | 'md:size-11/12'
  | 'md:size-full'
  | 'md:size-screen'
  | 'md:size-svw'
  | 'md:size-lvw'
  | 'md:size-dvw'
  | 'md:size-min'
  | 'md:size-max'
  | 'md:size-fit'
  | 'lg:size-0'
  | 'lg:size-px'
  | 'lg:size-0.5'
  | 'lg:size-1'
  | 'lg:size-1.5'
  | 'lg:size-2'
  | 'lg:size-2.5'
  | 'lg:size-3'
  | 'lg:size-3.5'
  | 'lg:size-4'
  | 'lg:size-5'
  | 'lg:size-6'
  | 'lg:size-7'
  | 'lg:size-8'
  | 'lg:size-9'
  | 'lg:size-10'
  | 'lg:size-11'
  | 'lg:size-12'
  | 'lg:size-14'
  | 'lg:size-16'
  | 'lg:size-20'
  | 'lg:size-24'
  | 'lg:size-28'
  | 'lg:size-32'
  | 'lg:size-36'
  | 'lg:size-40'
  | 'lg:size-44'
  | 'lg:size-48'
  | 'lg:size-52'
  | 'lg:size-56'
  | 'lg:size-60'
  | 'lg:size-64'
  | 'lg:size-72'
  | 'lg:size-80'
  | 'lg:size-96'
  | 'lg:size-auto'
  | 'lg:size-1/2'
  | 'lg:size-1/3'
  | 'lg:size-2/3'
  | 'lg:size-1/4'
  | 'lg:size-2/4'
  | 'lg:size-3/4'
  | 'lg:size-1/5'
  | 'lg:size-2/5'
  | 'lg:size-3/5'
  | 'lg:size-4/5'
  | 'lg:size-1/6'
  | 'lg:size-2/6'
  | 'lg:size-3/6'
  | 'lg:size-4/6'
  | 'lg:size-5/6'
  | 'lg:size-1/12'
  | 'lg:size-2/12'
  | 'lg:size-3/12'
  | 'lg:size-4/12'
  | 'lg:size-5/12'
  | 'lg:size-6/12'
  | 'lg:size-7/12'
  | 'lg:size-8/12'
  | 'lg:size-9/12'
  | 'lg:size-10/12'
  | 'lg:size-11/12'
  | 'lg:size-full'
  | 'lg:size-screen'
  | 'lg:size-svw'
  | 'lg:size-lvw'
  | 'lg:size-dvw'
  | 'lg:size-min'
  | 'lg:size-max'
  | 'lg:size-fit'
