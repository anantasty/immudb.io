# How it works

Download [immudb short research paper](todo) to have a conceptual understanding of the technical foundations of immudb.

This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!

## Adding data

This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!

## Checking data consistency

This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!

## Root signature

Providing `immudb` with a signing key enables the cryptographic state signature.
In this way an auditor for instance or a third party client could verify the authenticity of the returned root hash / index pair after calling `currentRoot` gRPC method.
Here the gRPC message definitions:
```proto
message ImmutableState {
	uint64 txId = 3;
	bytes txHash = 4;
	Signature signature = 5;
}

message Signature {
	bytes signature = 1;
	bytes publicKey = 2;
}
```
It's possible to use the environment `IMMUDB_SIGNING_KEY` or `--signingKey` immudb flag.

To generate a valid key it's possible to use `openssl` tool:
```.bash
openssl ecparam -name prime256v1 -genkey -noout -out my.key
```
Immuclient and [immugw](https://github.com/codenotary/immugw) are shipped with auditor capabilities.
To obtain the advantages of using the signed root in combination with the auditor it's possible to launch:
* immuclient with auditor capabilities:
```bash
immuclient audit-mode --audit-username {immudb-username} --audit-password {immudb-pw} --audit-signature validate
```
* with [immugw](https://github.com/codenotary/immugw) with auditor capabilities:
```bash
./immugw --audit --audit-username {immudb-username} --audit-password {immudb-pw} --audit-signature validate
```

## Item References

Enables the insertion of a special entry which references to another item

## Primary Index

Index enables queries and search based on the data key

## Secondary Index

Index enables queries and search based on the data value

## Cryptographic signatures

A signature (PKI) provided by the client can be became part of the insertion process

## Authentication (transport)

Integrated mTLS offers the best approach for machine-to-machine authentication, also providing communications security (entryption) over the transport channel

# immugw communication
immugw can be found in its [own repository](https://github.com/codenotary/immugw)

immugw proxies REST client communication and gRPC server interface. For security purposes, immugw should not run on the same server as immudb. The following diagram shows how the communication works:

![immugw communication explained](https://raw.githubusercontent.com/codenotary/immugw/master/img/immugw-diagram.png)