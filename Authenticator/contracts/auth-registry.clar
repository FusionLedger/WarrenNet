(define-non-fungible-token auth-registry uint)

(define-map registry
  ((company-id uint))
  (
    (name (buff 30))
    (bns (buff 50))
  )
)

(define-data-var last-auth-id uint 0)

(define-public (register (name (buff 30)) (bns (buff 50)))
  (let ((auth-id (+ 1 (var-get last-auth-id))))
    (var-set last-auth-id company-id)
    (map-insert registry {auth-id} {name, bns})
  )
)

(define-public (update (auth-id uint) (name (buff 30)) (bns (buff 200)))
  (let (owner (unwrap-panic (nft-get-owner? auth-registry auth-id)))
    (if (is-eq owner tx-sender)
      (ok (map-set registry {auth-id} {name, bns}))
      (err u1)
    )
  )
)
