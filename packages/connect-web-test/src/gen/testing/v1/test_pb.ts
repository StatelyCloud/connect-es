// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.0.6 with parameter "ts_nocheck=false,target=ts"
// @generated from file testing/v1/test.proto (package testing.v1, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message testing.v1.FullDuplexCallRequest
 */
export class FullDuplexCallRequest extends Message<FullDuplexCallRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<FullDuplexCallRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.FullDuplexCallRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullDuplexCallRequest {
    return new FullDuplexCallRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullDuplexCallRequest {
    return new FullDuplexCallRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullDuplexCallRequest {
    return new FullDuplexCallRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FullDuplexCallRequest | PlainMessage<FullDuplexCallRequest> | undefined, b: FullDuplexCallRequest | PlainMessage<FullDuplexCallRequest> | undefined): boolean {
    return proto3.util.equals(FullDuplexCallRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.FullDuplexCallResponse
 */
export class FullDuplexCallResponse extends Message<FullDuplexCallResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<FullDuplexCallResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.FullDuplexCallResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullDuplexCallResponse {
    return new FullDuplexCallResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullDuplexCallResponse {
    return new FullDuplexCallResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullDuplexCallResponse {
    return new FullDuplexCallResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FullDuplexCallResponse | PlainMessage<FullDuplexCallResponse> | undefined, b: FullDuplexCallResponse | PlainMessage<FullDuplexCallResponse> | undefined): boolean {
    return proto3.util.equals(FullDuplexCallResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryHappyRequest
 */
export class UnaryHappyRequest extends Message<UnaryHappyRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryHappyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryHappyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryHappyRequest {
    return new UnaryHappyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryHappyRequest {
    return new UnaryHappyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryHappyRequest {
    return new UnaryHappyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryHappyRequest | PlainMessage<UnaryHappyRequest> | undefined, b: UnaryHappyRequest | PlainMessage<UnaryHappyRequest> | undefined): boolean {
    return proto3.util.equals(UnaryHappyRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryHappyResponse
 */
export class UnaryHappyResponse extends Message<UnaryHappyResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryHappyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryHappyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryHappyResponse {
    return new UnaryHappyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryHappyResponse {
    return new UnaryHappyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryHappyResponse {
    return new UnaryHappyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryHappyResponse | PlainMessage<UnaryHappyResponse> | undefined, b: UnaryHappyResponse | PlainMessage<UnaryHappyResponse> | undefined): boolean {
    return proto3.util.equals(UnaryHappyResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryErrorRequest
 */
export class UnaryErrorRequest extends Message<UnaryErrorRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryErrorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryErrorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryErrorRequest {
    return new UnaryErrorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryErrorRequest {
    return new UnaryErrorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryErrorRequest {
    return new UnaryErrorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryErrorRequest | PlainMessage<UnaryErrorRequest> | undefined, b: UnaryErrorRequest | PlainMessage<UnaryErrorRequest> | undefined): boolean {
    return proto3.util.equals(UnaryErrorRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryErrorResponse
 */
export class UnaryErrorResponse extends Message<UnaryErrorResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryErrorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryErrorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryErrorResponse {
    return new UnaryErrorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryErrorResponse {
    return new UnaryErrorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryErrorResponse {
    return new UnaryErrorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryErrorResponse | PlainMessage<UnaryErrorResponse> | undefined, b: UnaryErrorResponse | PlainMessage<UnaryErrorResponse> | undefined): boolean {
    return proto3.util.equals(UnaryErrorResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryHeadersRequest
 */
export class UnaryHeadersRequest extends Message<UnaryHeadersRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryHeadersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryHeadersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryHeadersRequest {
    return new UnaryHeadersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryHeadersRequest {
    return new UnaryHeadersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryHeadersRequest {
    return new UnaryHeadersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryHeadersRequest | PlainMessage<UnaryHeadersRequest> | undefined, b: UnaryHeadersRequest | PlainMessage<UnaryHeadersRequest> | undefined): boolean {
    return proto3.util.equals(UnaryHeadersRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryHeadersResponse
 */
export class UnaryHeadersResponse extends Message<UnaryHeadersResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryHeadersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryHeadersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryHeadersResponse {
    return new UnaryHeadersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryHeadersResponse {
    return new UnaryHeadersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryHeadersResponse {
    return new UnaryHeadersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryHeadersResponse | PlainMessage<UnaryHeadersResponse> | undefined, b: UnaryHeadersResponse | PlainMessage<UnaryHeadersResponse> | undefined): boolean {
    return proto3.util.equals(UnaryHeadersResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryTrailersRequest
 */
export class UnaryTrailersRequest extends Message<UnaryTrailersRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryTrailersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryTrailersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryTrailersRequest {
    return new UnaryTrailersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryTrailersRequest {
    return new UnaryTrailersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryTrailersRequest {
    return new UnaryTrailersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryTrailersRequest | PlainMessage<UnaryTrailersRequest> | undefined, b: UnaryTrailersRequest | PlainMessage<UnaryTrailersRequest> | undefined): boolean {
    return proto3.util.equals(UnaryTrailersRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryTrailersResponse
 */
export class UnaryTrailersResponse extends Message<UnaryTrailersResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryTrailersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryTrailersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryTrailersResponse {
    return new UnaryTrailersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryTrailersResponse {
    return new UnaryTrailersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryTrailersResponse {
    return new UnaryTrailersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryTrailersResponse | PlainMessage<UnaryTrailersResponse> | undefined, b: UnaryTrailersResponse | PlainMessage<UnaryTrailersResponse> | undefined): boolean {
    return proto3.util.equals(UnaryTrailersResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryExpectHeadersRequest
 */
export class UnaryExpectHeadersRequest extends Message<UnaryExpectHeadersRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryExpectHeadersRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryExpectHeadersRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryExpectHeadersRequest {
    return new UnaryExpectHeadersRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryExpectHeadersRequest {
    return new UnaryExpectHeadersRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryExpectHeadersRequest {
    return new UnaryExpectHeadersRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryExpectHeadersRequest | PlainMessage<UnaryExpectHeadersRequest> | undefined, b: UnaryExpectHeadersRequest | PlainMessage<UnaryExpectHeadersRequest> | undefined): boolean {
    return proto3.util.equals(UnaryExpectHeadersRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryExpectHeadersResponse
 */
export class UnaryExpectHeadersResponse extends Message<UnaryExpectHeadersResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryExpectHeadersResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryExpectHeadersResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryExpectHeadersResponse {
    return new UnaryExpectHeadersResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryExpectHeadersResponse {
    return new UnaryExpectHeadersResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryExpectHeadersResponse {
    return new UnaryExpectHeadersResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryExpectHeadersResponse | PlainMessage<UnaryExpectHeadersResponse> | undefined, b: UnaryExpectHeadersResponse | PlainMessage<UnaryExpectHeadersResponse> | undefined): boolean {
    return proto3.util.equals(UnaryExpectHeadersResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryUnimplementedRequest
 */
export class UnaryUnimplementedRequest extends Message<UnaryUnimplementedRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UnaryUnimplementedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryUnimplementedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryUnimplementedRequest {
    return new UnaryUnimplementedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryUnimplementedRequest {
    return new UnaryUnimplementedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryUnimplementedRequest {
    return new UnaryUnimplementedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryUnimplementedRequest | PlainMessage<UnaryUnimplementedRequest> | undefined, b: UnaryUnimplementedRequest | PlainMessage<UnaryUnimplementedRequest> | undefined): boolean {
    return proto3.util.equals(UnaryUnimplementedRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.UnaryUnimplementedResponse
 */
export class UnaryUnimplementedResponse extends Message<UnaryUnimplementedResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<UnaryUnimplementedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.UnaryUnimplementedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnaryUnimplementedResponse {
    return new UnaryUnimplementedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnaryUnimplementedResponse {
    return new UnaryUnimplementedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnaryUnimplementedResponse {
    return new UnaryUnimplementedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UnaryUnimplementedResponse | PlainMessage<UnaryUnimplementedResponse> | undefined, b: UnaryUnimplementedResponse | PlainMessage<UnaryUnimplementedResponse> | undefined): boolean {
    return proto3.util.equals(UnaryUnimplementedResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingHappyRequest
 */
export class ServerStreamingHappyRequest extends Message<ServerStreamingHappyRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<ServerStreamingHappyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingHappyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingHappyRequest {
    return new ServerStreamingHappyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingHappyRequest {
    return new ServerStreamingHappyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingHappyRequest {
    return new ServerStreamingHappyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingHappyRequest | PlainMessage<ServerStreamingHappyRequest> | undefined, b: ServerStreamingHappyRequest | PlainMessage<ServerStreamingHappyRequest> | undefined): boolean {
    return proto3.util.equals(ServerStreamingHappyRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingHappyResponse
 */
export class ServerStreamingHappyResponse extends Message<ServerStreamingHappyResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<ServerStreamingHappyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingHappyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingHappyResponse {
    return new ServerStreamingHappyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingHappyResponse {
    return new ServerStreamingHappyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingHappyResponse {
    return new ServerStreamingHappyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingHappyResponse | PlainMessage<ServerStreamingHappyResponse> | undefined, b: ServerStreamingHappyResponse | PlainMessage<ServerStreamingHappyResponse> | undefined): boolean {
    return proto3.util.equals(ServerStreamingHappyResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingErrorRequest
 */
export class ServerStreamingErrorRequest extends Message<ServerStreamingErrorRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<ServerStreamingErrorRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingErrorRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingErrorRequest {
    return new ServerStreamingErrorRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingErrorRequest {
    return new ServerStreamingErrorRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingErrorRequest {
    return new ServerStreamingErrorRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingErrorRequest | PlainMessage<ServerStreamingErrorRequest> | undefined, b: ServerStreamingErrorRequest | PlainMessage<ServerStreamingErrorRequest> | undefined): boolean {
    return proto3.util.equals(ServerStreamingErrorRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingErrorResponse
 */
export class ServerStreamingErrorResponse extends Message<ServerStreamingErrorResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<ServerStreamingErrorResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingErrorResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingErrorResponse {
    return new ServerStreamingErrorResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingErrorResponse {
    return new ServerStreamingErrorResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingErrorResponse {
    return new ServerStreamingErrorResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingErrorResponse | PlainMessage<ServerStreamingErrorResponse> | undefined, b: ServerStreamingErrorResponse | PlainMessage<ServerStreamingErrorResponse> | undefined): boolean {
    return proto3.util.equals(ServerStreamingErrorResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingEmptyRequest
 */
export class ServerStreamingEmptyRequest extends Message<ServerStreamingEmptyRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<ServerStreamingEmptyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingEmptyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingEmptyRequest {
    return new ServerStreamingEmptyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingEmptyRequest {
    return new ServerStreamingEmptyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingEmptyRequest {
    return new ServerStreamingEmptyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingEmptyRequest | PlainMessage<ServerStreamingEmptyRequest> | undefined, b: ServerStreamingEmptyRequest | PlainMessage<ServerStreamingEmptyRequest> | undefined): boolean {
    return proto3.util.equals(ServerStreamingEmptyRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingEmptyResponse
 */
export class ServerStreamingEmptyResponse extends Message<ServerStreamingEmptyResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<ServerStreamingEmptyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingEmptyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingEmptyResponse {
    return new ServerStreamingEmptyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingEmptyResponse {
    return new ServerStreamingEmptyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingEmptyResponse {
    return new ServerStreamingEmptyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingEmptyResponse | PlainMessage<ServerStreamingEmptyResponse> | undefined, b: ServerStreamingEmptyResponse | PlainMessage<ServerStreamingEmptyResponse> | undefined): boolean {
    return proto3.util.equals(ServerStreamingEmptyResponse, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingUnimplementedRequest
 */
export class ServerStreamingUnimplementedRequest extends Message<ServerStreamingUnimplementedRequest> {
  /**
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<ServerStreamingUnimplementedRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingUnimplementedRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingUnimplementedRequest {
    return new ServerStreamingUnimplementedRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingUnimplementedRequest {
    return new ServerStreamingUnimplementedRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingUnimplementedRequest {
    return new ServerStreamingUnimplementedRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingUnimplementedRequest | PlainMessage<ServerStreamingUnimplementedRequest> | undefined, b: ServerStreamingUnimplementedRequest | PlainMessage<ServerStreamingUnimplementedRequest> | undefined): boolean {
    return proto3.util.equals(ServerStreamingUnimplementedRequest, a, b);
  }
}

/**
 * @generated from message testing.v1.ServerStreamingUnimplementedResponse
 */
export class ServerStreamingUnimplementedResponse extends Message<ServerStreamingUnimplementedResponse> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<ServerStreamingUnimplementedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "testing.v1.ServerStreamingUnimplementedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerStreamingUnimplementedResponse {
    return new ServerStreamingUnimplementedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerStreamingUnimplementedResponse {
    return new ServerStreamingUnimplementedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerStreamingUnimplementedResponse {
    return new ServerStreamingUnimplementedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ServerStreamingUnimplementedResponse | PlainMessage<ServerStreamingUnimplementedResponse> | undefined, b: ServerStreamingUnimplementedResponse | PlainMessage<ServerStreamingUnimplementedResponse> | undefined): boolean {
    return proto3.util.equals(ServerStreamingUnimplementedResponse, a, b);
  }
}
