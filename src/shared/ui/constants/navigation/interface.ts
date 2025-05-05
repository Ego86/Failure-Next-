import {  LucideProps } from "lucide-react";

export interface IListComponents { 
  url: string;
  title: string;
  Icon:  React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> ;
}