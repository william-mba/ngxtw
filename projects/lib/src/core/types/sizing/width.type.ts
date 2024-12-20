import { MinWidth } from "./min-width.type";

export type Width =
  | 'w-0'
  | 'w-px'
  | 'w-0.5'
  | 'w-1'
  | 'w-1.5'
  | 'w-2'
  | 'w-2.5'
  | 'w-3'
  | 'w-3.5'
  | 'w-4'
  | 'w-5'
  | 'w-6'
  | 'w-7'
  | 'w-8'
  | 'w-9'
  | 'w-10'
  | 'w-11'
  | 'w-12'
  | 'w-14'
  | 'w-16'
  | 'w-20'
  | 'w-24'
  | 'w-28'
  | 'w-32'
  | 'w-36'
  | 'w-40'
  | 'w-44'
  | 'w-48'
  | 'w-52'
  | 'w-56'
  | 'w-60'
  | 'w-64'
  | 'w-72'
  | 'w-80'
  | 'w-96'
  | 'w-auto'
  | 'w-1/2'
  | 'w-1/3'
  | 'w-2/3'
  | 'w-1/4'
  | 'w-2/4'
  | 'w-3/4'
  | 'w-1/5'
  | 'w-2/5'
  | 'w-3/5'
  | 'w-4/5'
  | 'w-1/6'
  | 'w-2/6'
  | 'w-3/6'
  | 'w-4/6'
  | 'w-5/6'
  | 'w-1/12'
  | 'w-2/12'
  | 'w-3/12'
  | 'w-4/12'
  | 'w-5/12'
  | 'w-6/12'
  | 'w-7/12'
  | 'w-8/12'
  | 'w-9/12'
  | 'w-10/12'
  | 'w-11/12'
  | 'w-full'
  | 'w-screen'
  | 'w-svw'
  | 'w-lvw'
  | 'w-dvw'
  | 'w-min'
  | 'w-max'
  | 'w-fit'
  | '*:w-0'
  | '*:w-px'
  | '*:w-0.5'
  | '*:w-1'
  | '*:w-1.5'
  | '*:w-2'
  | '*:w-2.5'
  | '*:w-3'
  | '*:w-3.5'
  | '*:w-4'
  | '*:w-5'
  | '*:w-6'
  | '*:w-7'
  | '*:w-8'
  | '*:w-9'
  | '*:w-10'
  | '*:w-11'
  | '*:w-12'
  | '*:w-14'
  | '*:w-16'
  | '*:w-20'
  | '*:w-24'
  | '*:w-28'
  | '*:w-32'
  | '*:w-36'
  | '*:w-40'
  | '*:w-44'
  | '*:w-48'
  | '*:w-52'
  | '*:w-56'
  | '*:w-60'
  | '*:w-64'
  | '*:w-72'
  | '*:w-80'
  | '*:w-96'
  | '*:w-auto'
  | '*:w-1/2'
  | '*:w-1/3'
  | '*:w-2/3'
  | '*:w-1/4'
  | '*:w-2/4'
  | '*:w-3/4'
  | '*:w-1/5'
  | '*:w-2/5'
  | '*:w-3/5'
  | '*:w-4/5'
  | '*:w-1/6'
  | '*:w-2/6'
  | '*:w-3/6'
  | '*:w-4/6'
  | '*:w-5/6'
  | '*:w-1/12'
  | '*:w-2/12'
  | '*:w-3/12'
  | '*:w-4/12'
  | '*:w-5/12'
  | '*:w-6/12'
  | '*:w-7/12'
  | '*:w-8/12'
  | '*:w-9/12'
  | '*:w-10/12'
  | '*:w-11/12'
  | '*:w-full'
  | '*:w-screen'
  | '*:w-svw'
  | '*:w-lvw'
  | '*:w-dvw'
  | '*:w-min'
  | '*:w-max'
  | '*:w-fit'
  | 'sm:w-0'
  | 'sm:w-px'
  | 'sm:w-0.5'
  | 'sm:w-1'
  | 'sm:w-1.5'
  | 'sm:w-2'
  | 'sm:w-2.5'
  | 'sm:w-3'
  | 'sm:w-3.5'
  | 'sm:w-4'
  | 'sm:w-5'
  | 'sm:w-6'
  | 'sm:w-7'
  | 'sm:w-8'
  | 'sm:w-9'
  | 'sm:w-10'
  | 'sm:w-11'
  | 'sm:w-12'
  | 'sm:w-14'
  | 'sm:w-16'
  | 'sm:w-20'
  | 'sm:w-24'
  | 'sm:w-28'
  | 'sm:w-32'
  | 'sm:w-36'
  | 'sm:w-40'
  | 'sm:w-44'
  | 'sm:w-48'
  | 'sm:w-52'
  | 'sm:w-56'
  | 'sm:w-60'
  | 'sm:w-64'
  | 'sm:w-72'
  | 'sm:w-80'
  | 'sm:w-96'
  | 'sm:w-auto'
  | 'sm:w-1/2'
  | 'sm:w-1/3'
  | 'sm:w-2/3'
  | 'sm:w-1/4'
  | 'sm:w-2/4'
  | 'sm:w-3/4'
  | 'sm:w-1/5'
  | 'sm:w-2/5'
  | 'sm:w-3/5'
  | 'sm:w-4/5'
  | 'sm:w-1/6'
  | 'sm:w-2/6'
  | 'sm:w-3/6'
  | 'sm:w-4/6'
  | 'sm:w-5/6'
  | 'sm:w-1/12'
  | 'sm:w-2/12'
  | 'sm:w-3/12'
  | 'sm:w-4/12'
  | 'sm:w-5/12'
  | 'sm:w-6/12'
  | 'sm:w-7/12'
  | 'sm:w-8/12'
  | 'sm:w-9/12'
  | 'sm:w-10/12'
  | 'sm:w-11/12'
  | 'sm:w-full'
  | 'sm:w-screen'
  | 'sm:w-svw'
  | 'sm:w-lvw'
  | 'sm:w-dvw'
  | 'sm:w-min'
  | 'sm:w-max'
  | 'sm:w-fit'
  | 'sm:w-[600px]'
  | 'md:w-0'
  | 'md:w-px'
  | 'md:w-0.5'
  | 'md:w-1'
  | 'md:w-1.5'
  | 'md:w-2'
  | 'md:w-2.5'
  | 'md:w-3'
  | 'md:w-3.5'
  | 'md:w-4'
  | 'md:w-5'
  | 'md:w-6'
  | 'md:w-7'
  | 'md:w-8'
  | 'md:w-9'
  | 'md:w-10'
  | 'md:w-11'
  | 'md:w-12'
  | 'md:w-14'
  | 'md:w-16'
  | 'md:w-20'
  | 'md:w-24'
  | 'md:w-28'
  | 'md:w-32'
  | 'md:w-36'
  | 'md:w-40'
  | 'md:w-44'
  | 'md:w-48'
  | 'md:w-52'
  | 'md:w-56'
  | 'md:w-60'
  | 'md:w-64'
  | 'md:w-72'
  | 'md:w-80'
  | 'md:w-96'
  | 'md:w-auto'
  | 'md:w-1/2'
  | 'md:w-1/3'
  | 'md:w-2/3'
  | 'md:w-1/4'
  | 'md:w-2/4'
  | 'md:w-3/4'
  | 'md:w-1/5'
  | 'md:w-2/5'
  | 'md:w-3/5'
  | 'md:w-4/5'
  | 'md:w-1/6'
  | 'md:w-2/6'
  | 'md:w-3/6'
  | 'md:w-4/6'
  | 'md:w-5/6'
  | 'md:w-1/12'
  | 'md:w-2/12'
  | 'md:w-3/12'
  | 'md:w-4/12'
  | 'md:w-5/12'
  | 'md:w-6/12'
  | 'md:w-7/12'
  | 'md:w-8/12'
  | 'md:w-9/12'
  | 'md:w-10/12'
  | 'md:w-11/12'
  | 'md:w-full'
  | 'md:w-screen'
  | 'md:w-svw'
  | 'md:w-lvw'
  | 'md:w-dvw'
  | 'md:w-min'
  | 'md:w-max'
  | 'md:w-fit'
  | 'lg:w-0'
  | 'lg:w-px'
  | 'lg:w-0.5'
  | 'lg:w-1'
  | 'lg:w-1.5'
  | 'lg:w-2'
  | 'lg:w-2.5'
  | 'lg:w-3'
  | 'lg:w-3.5'
  | 'lg:w-4'
  | 'lg:w-5'
  | 'lg:w-6'
  | 'lg:w-7'
  | 'lg:w-8'
  | 'lg:w-9'
  | 'lg:w-10'
  | 'lg:w-11'
  | 'lg:w-12'
  | 'lg:w-14'
  | 'lg:w-16'
  | 'lg:w-20'
  | 'lg:w-24'
  | 'lg:w-28'
  | 'lg:w-32'
  | 'lg:w-36'
  | 'lg:w-40'
  | 'lg:w-44'
  | 'lg:w-48'
  | 'lg:w-52'
  | 'lg:w-56'
  | 'lg:w-60'
  | 'lg:w-64'
  | 'lg:w-72'
  | 'lg:w-80'
  | 'lg:w-96'
  | 'lg:w-auto'
  | 'lg:w-1/2'
  | 'lg:w-1/3'
  | 'lg:w-2/3'
  | 'lg:w-1/4'
  | 'lg:w-2/4'
  | 'lg:w-3/4'
  | 'lg:w-1/5'
  | 'lg:w-2/5'
  | 'lg:w-3/5'
  | 'lg:w-4/5'
  | 'lg:w-1/6'
  | 'lg:w-2/6'
  | 'lg:w-3/6'
  | 'lg:w-4/6'
  | 'lg:w-5/6'
  | 'lg:w-1/12'
  | 'lg:w-2/12'
  | 'lg:w-3/12'
  | 'lg:w-4/12'
  | 'lg:w-5/12'
  | 'lg:w-6/12'
  | 'lg:w-7/12'
  | 'lg:w-8/12'
  | 'lg:w-9/12'
  | 'lg:w-10/12'
  | 'lg:w-11/12'
  | 'lg:w-full'
  | 'lg:w-screen'
  | 'lg:w-svw'
  | 'lg:w-lvw'
  | 'lg:w-dvw'
  | 'lg:w-min'
  | 'lg:w-max'
  | 'lg:w-fit'
  | 'lg:w-[800px]'
  | MinWidth
