import { expectAssignable, expectNotAssignable } from 'jest-tsd';
import { RawClassAsset } from '../Classes';

const minimalClass = {
    key: 'sampleClass',
    tier: 'base',
    maxLevel: 1,
    hd: 6,
    bab: 0.5,
    skl: 0,
    wealth: 0,
    skills: [],
    features: [],
};
const fullClass = {
    key: 'sampleClass',
    tier: 'prestige',
    maxLevel: 20,
    hd: 12,
    bab: 1,
    skl: 12,
    wealth: 999999,
    skills: ['sampleSkill1', 'sampleSkill2', 'sampleSkill3'],
    features: [
        {
            level: 1,
            feature: 'sampleFeature1',
        },
        {
            level: 3,
            feature: 'sampleFeature2',
        },
        {
            level: 5,
            feature: 'sampleFeature3',
        },
        {
            level: 6,
            aura: 'sampleAura1',
        },
        {
            level: 10,
            aura: 'sampleAura1',
        },
    ],
};

describe('RawClassAsset', () => {
    it('should accept a minimal class', () => {
        expectAssignable<RawClassAsset>(minimalClass);
    });
    it('should accept a full class', () => {
        expectAssignable<RawClassAsset>(fullClass);
    });
    it('should not accept a class with missing key', () => {
        expectNotAssignable<RawClassAsset>({ ...minimalClass, key: undefined });
    });
    it('should not accept a class with missing tier', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            tier: undefined,
        });
    });
    it('should not accept a class with missing maxLevel', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            maxLevel: undefined,
        });
    });
    it('should not accept a class with missing hd', () => {
        expectNotAssignable<RawClassAsset>({ ...minimalClass, hd: undefined });
    });
    it('should not accept a class with missing BaB', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            bab: undefined,
        });
    });
    it('should not accept a class with missing skl', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            skl: undefined,
        });
    });
    it('should not accept a class with unknown properties', () => {
        expectNotAssignable<RawClassAsset>({
            ...minimalClass,
            unknown: 'unknown',
        });
        expectNotAssignable<RawClassAsset>({
            ...fullClass,
            unknown2: 'yolo',
        });
        expectNotAssignable<RawClassAsset>({
            ...fullClass,
            ...minimalClass,
            unknown3: 'whatever',
        });
    });
});
