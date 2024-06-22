# sealsecretaction
This project using github action to convert scret file to sealed secret

 kubectl port-forward pod/<pod_id> 3000:3000

  kubectl get secret -n kube-system

 kubectl get secret -n kube-system sealed-secrets-keylwtnw -o jsonpath='{.data.tls\.crt}' | base64 --decode > public-cert.pem
