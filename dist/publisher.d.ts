import { PublisherGCSConfig } from "./config";
import Publisher, { PublisherOptions } from "@electron-forge/publisher-base";
declare type GCSArtifact = {
    path: string;
    keyPrefix: string;
    platform: string;
    arch: string;
};
export default class PublisherGCS extends Publisher<PublisherGCSConfig> {
    name: string;
    publish({ makeResults }: PublisherOptions): Promise<void>;
    keyForArtifact(artifact: GCSArtifact): string;
}
export {};
