/* @jsx MD */
import type { Component } from "jsx-md";
import MD from "jsx-md";
import type { PackageJSON } from "../../PackageJSON";
import { Badge } from "../Badge";

export interface Props {
  pkg: Readonly<PackageJSON>;
}

export const NpmDownloadsBadge: Component<Readonly<Props>> = ({ pkg }) => {
  if (pkg.private !== undefined && pkg.private) {
    return null;
  }
  return (
    <Badge
      link={`https://npm-stat.com/charts.html?package=${pkg.name}`}
      imageSource={`https://img.shields.io/npm/dw/${pkg.name}.svg`}
    >
      downloads
    </Badge>
  );
};
